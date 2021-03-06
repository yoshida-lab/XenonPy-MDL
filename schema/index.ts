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

import path from 'path'
import { DateTimeResolver, JSONObjectResolver } from 'graphql-scalars'
import { GraphQLUpload } from 'apollo-server-micro'
import { nexusPrisma } from 'nexus-plugin-prisma'

import { asNexusMethod, enumType } from 'nexus'
import {
  makeSchema,
  fieldAuthorizePlugin,
  queryComplexityPlugin,
  connectionPlugin,
  declarativeWrappingPlugin
} from 'nexus'

import * as Artifact from './artifact'
import * as Descriptor from './descriptor'
import * as Method from './method'
import * as Model from './model'
import * as Modelset from './modelset'
import * as Organization from './organization'
import * as Property from './property'
import * as User from './user'
import * as Statistic from './statistic'

const JsonScalar = asNexusMethod(JSONObjectResolver, 'json')
const DateTimeScalar = asNexusMethod(DateTimeResolver, 'date')
const UploadScalar = asNexusMethod(GraphQLUpload!, 'upload')

/**
 * Enum for user role
 */
const RoleType = enumType({
  name: 'Role',
  members: ['USER', 'MASTER', 'TESTER', 'ADMIN']
})

/**
 * Build Apollo server graphQL schema
 * using Nexus.js and plugins
 * See also: https://nexusjs.org/docs/plugins/prisma
 */
export const schema = makeSchema({
  types: [
    Artifact,
    Descriptor,
    Method,
    Model,
    Modelset,
    Organization,
    Property,
    User,
    Statistic,
    JsonScalar,
    DateTimeScalar,
    UploadScalar,
    RoleType
  ],
  plugins: [
    fieldAuthorizePlugin({
      formatError({ error }) {
        return Error(`${error.name}: ${error.message}. Please sign-in or pass your API key to access this API`)
      }
    }),
    queryComplexityPlugin(),
    declarativeWrappingPlugin(),
    connectionPlugin({ includeNodesField: true }),
    nexusPrisma({
      experimentalCRUD: true,
      computedInputs: {
        // all user connection will be replaced with the current
        // return null if no current
        // note that the super user id, the -1, will be returned
        // the non user error can be caught at resolve level
        owner: async ({ ctx }) => (Boolean(ctx.uid) ? { connect: { id: ctx.uid } } : null),
        models: async () => undefined
      }
    })
  ],
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  features: {
    abstractTypeStrategies: {
      isTypeOf: true
    }
  },
  outputs: {
    // Type definition under 'node_modules/@types/typegen-nexus/index.d.ts' will be loaded automatically
    typegen: path.join(process.cwd(), 'node_modules/@types/typegen-nexus/index.d.ts'),
    schema: path.join(process.cwd(), 'src/graphql/generated/nexus-schema.graphql')
  },

  // Context typing of resolve(_, _, ctx: Context)
  contextType: {
    // IMPORT: in docker, require.resolve not works
    module: path.join(process.cwd(), 'src/pages/api/context.ts'),
    // alias: 'ContextModule',
    export: 'Context'
  },

  sourceTypes: {
    modules: [
      {
        module: path.join(process.cwd(), 'node_modules/.prisma/client/index.d.ts'),
        alias: 'prisma'
      }
    ]
  }
})
