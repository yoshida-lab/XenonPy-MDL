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

import { ApolloServer } from 'apollo-server-micro'
import { getSession } from 'next-auth/client'
import { IncomingMessage } from 'http'
import Cors from 'micro-cors'

import prisma from '../../../lib/prisma'
import minio from '../../../lib/minio-client'
import { Context } from './context'
import { schema } from '../../../schema'

// expose the to config api behaviour in nextjs
export const config = {
  api: {
    bodyParser: false
  }
}

type Config = {
  api: {
    externalResolver?: boolean
    bodyParser?:
      | boolean
      | {
          sizeLimit: string
        }
  }
}

/**
 * Allow CORS
 */
const cors = Cors({
  allowMethods: ['POST', 'OPTIONS']
})

/**
 * Apollo graphQL server
 */
const handler = new ApolloServer({
  async context({ req }: { req: IncomingMessage }): Promise<Context> {
    const apiKey = req?.headers['x-api-key']

    // if super user key
    if (apiKey && apiKey === process.env.SUPER_USER_KEY) {
      return { prisma, minio, uid: -1, req }
    }

    // if normal user key
    if (apiKey && !Array.isArray(apiKey)) {
      const uid = (await prisma.user.findUnique({ where: { apiKey: apiKey } }))?.id
      return { prisma, minio, uid, req }
    }

    // otherwise, try to extract user from session
    const email = (await getSession({ req }))?.user.email
    if (email) {
      return { prisma, minio, uid: (await prisma.user.findUnique({ where: { email } }))?.id, req }
    }

    // not authorized
    return { prisma, minio, req }
  },

  // graphql playground
  playground: Boolean(process.env.GRAPHQL_PLAYGROUND) || process.env.NODE_ENV === 'development',

  // graphql upload
  uploads: {
    maxFileSize: 1024 * 1024 * 1024 * 128, // MB
    maxFiles: 75
  },

  // user defined schemas
  schema
}).createHandler({
  path: '/api'
})

export default cors(handler)
