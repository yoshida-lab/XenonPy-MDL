// Copyright 2021 TsumiNa
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import NextAuth, { User } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import bcrypt from 'bcrypt'

import { NextApiRequest, NextApiResponse, SessionBase } from 'next-auth/_utils'

import { keyGenerator } from '../../../lib/utils'
import prisma from '../../../lib/prisma'

export default (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, {
    providers: [
      // allow github oath
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!
      }),

      // allow github oath
      Providers.Google({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!
      }),

      // email and passwd sign-in/sign-up
      Providers.Credentials({
        name: 'E-mail and Password',
        credentials: {
          email: { label: 'Email address', type: 'email' },
          password: { label: 'Password', type: 'password' },
          userName: { label: 'Username (for sign up)', type: 'text', placeholder: 'Option...' }
        },
        async authorize({ email, password, userName }) {
          const user = await prisma.user.findUnique({ where: { email: email } })
          const saltString = password + process.env.NEXTAUTH_SECRET
          if (user?.hashedPW && (await bcrypt.compare(saltString, user.hashedPW))) {
            return {
              name: user.name,
              email: user.email,
              image: user.image,
              apiKey: user.apiKey
            }
          }
          if (userName) {
            const saltString = password + process.env.NEXTAUTH_SECRET
            const user = await prisma.user.create({
              data: {
                name: userName,
                email: email,
                apiKey: await keyGenerator(),
                hashedPW: await bcrypt.hash(saltString, 10)
              }
            })
            return {
              ...user
            }
          }
          return null
        }
      })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),

    secret: process.env.NEXTAUTH_SECRET,

    session: {
      // Use JSON Web Tokens for session instead of database sessions.
      jwt: true,

      // Seconds - How long until an idle session expires and is no longer valid.
      maxAge: 30 * 24 * 60 * 60, // 30 days

      // Seconds - Throttle how frequently to write to database to extend a session.
      // Note: This option is ignored if using JSON Web Tokens
      updateAge: 24 * 60 * 60 // 24 hours
    },

    // JSON Web tokens are only used for sessions if the `jwt: true` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
      // A secret to use for key generation (you should set this explicitly)
      secret: process.env.NEXTAUTH_JWT_SECRET
    },

    // You can define custom pages to override the built-in pages.
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
      // signIn: '/api/auth/signin',  // Displays signin buttons
      // signOut: '/api/auth/signout', // Displays form with sign out button
      // error: '/api/auth/error', // Error code passed in query string as ?error=
      // verifyRequest: '/api/auth/verify-request', // Used for check email page
      // newUser: null // If set, new users will be directed here on first sign in
    },

    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
      async signIn(user, account, profile) {
        // email is needed
        return Boolean(user.email)
      },
      // async redirect(url, baseUrl) { return baseUrl },
      async session(session: { apiKey?: string } & SessionBase, token: { apiKey?: string } & User) {
        if (token?.apiKey) {
          session.apiKey = token.apiKey
        }
        return session
      },
      async jwt(token, user: { apiKey?: string } & User, _account, _profile, _isNewUser) {
        // add api key to new user
        if (_isNewUser) {
          const apiKey = await keyGenerator()
          await prisma.user.update({ where: { email: user.email! }, data: { apiKey: apiKey } })
          token.apiKey = apiKey

          // or get from the current user
        } else if (user?.apiKey) {
          token.apiKey = user.apiKey
        }
        return token
      }
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},
    theme: 'light',
    // Enable debug messages in the console if you are having problems
    debug: false
  })
