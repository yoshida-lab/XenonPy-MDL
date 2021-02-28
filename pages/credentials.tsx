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

import * as React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { csrfToken } from 'next-auth/client'

import { Layout } from '../components/Layout'
import { GetServerSideProps } from 'next'
import { GenericObject } from 'next-auth/_utils'

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  return {
    props: {
      csrfToken: await csrfToken(context)
    }
  }
}

type SignInOption = GenericObject & { callbackUrl?: string; redirect?: boolean }

export default function Page({ csrfToken }: { csrfToken?: string }) {
  const [response, setResponse] = React.useState(null)
  const handleLogin = (options: SignInOption) => async () => {
    if (options.redirect) {
      return signIn('credentials', options)
    }
    const response: any = await signIn('credentials', options)
    setResponse(response)
  }

  const handleLogout = (options: SignInOption) => async () => {
    if (options.redirect) {
      return signOut(options)
    }
    const response: any = await signOut(options)
    setResponse(response)
  }

  const [session] = useSession()

  if (session) {
    return (
      <Layout>
        <h1>Test different flows for Credentials logout</h1>
        <span className="spacing">Default:</span>
        <button onClick={handleLogout({ redirect: true })}>Logout</button>
        <br />
        <span className="spacing">No redirect:</span>
        <button onClick={handleLogout({ redirect: false })}>Logout</button>
        <br />
        <p>Response:</p>
        <pre style={{ background: '#eee', padding: 16 }}>{JSON.stringify(response, null, 2)}</pre>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Test different flows for Credentials login</h1>
      <form method="POST" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken!} />
        <label>
          E-mail
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <label>
          Sign up
          <input type="checkbox" name="signup" />
        </label>
        <button type="submit">Sign in</button>
      </form>

      <span className="spacing">Default:</span>
      <button onClick={handleLogin({ redirect: true, password: 'password', email: 'test@test', signup: true })}>
        Login
      </button>
      <br />
      <span className="spacing">No redirect:</span>
      <button onClick={handleLogin({ redirect: false, password: 'password', email: 'test@test', signup: true })}>
        Login
      </button>
      <br />
      <span className="spacing">No redirect, wrong password:</span>
      <button onClick={handleLogin({ redirect: false, password: '', email: 'non@test', signup: true })}>Login</button>
      <p>Response:</p>
      <pre style={{ background: '#d8a8a8', padding: 16 }}>{JSON.stringify(response, null, 2)}</pre>
    </Layout>
  )
}
