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

import { objectType, queryField, mutationField, stringArg } from 'nexus'
import bcrypt from 'bcrypt'
import { ApolloError } from 'apollo-server-micro'
import { anyNormalUser } from '../lib/utils'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.name()
    t.model.image()
    t.model.apiKey()
    t.model.role()
    t.model.email()
    t.model.descriptors()
    t.model.models({
      complexity: 2,
      pagination: true,
      ordering: {
        id: true,
        createdAt: true,
        updatedAt: true,
        keywords: true,
        modelset: true,
        property: true,
        method: true,
        descriptor: true,
        clsMetric: true,
        regMetric: true
      },
      filtering: true
    })

    t.int('modelCounts', {
      description: 'number of models',
      async resolve({ id }, _args, { prisma }) {
        return await prisma.model.count({
          where: { ownerId: id }
        })
      }
    })
  }
})

export const Query = queryField(t => {
  t.crud.user()
  t.crud.users({
    filtering: {
      name: true,
      email: true,
      emailVerified: true
    }
  })
})

export const Mutation = mutationField(t => {
  // common user update
  t.crud.updateOneUser({
    authorize: anyNormalUser,

    // hashedPW should not be accessible by user
    computedInputs: {
      hashedPW: async ({ ctx }) => (await ctx.prisma.user.findUnique({ where: { id: ctx.uid } }))?.hashedPW,
      apiKey: async ({ ctx }) => (await ctx.prisma.user.findUnique({ where: { id: ctx.uid } }))?.apiKey,
      role: async ({ ctx }) => (await ctx.prisma.user.findUnique({ where: { id: ctx.uid } }))?.role
    }
  })

  // change password
  t.boolean('changePassword', {
    nullable: false,
    args: {
      currentPassword: stringArg({
        description: 'The current password',
        nullable: false
      }),
      newPassword: stringArg({
        description: 'New password',
        nullable: false
      })
    },
    authorize: anyNormalUser,
    async resolve(_parent, { currentPassword, newPassword }, { prisma, uid }) {
      const hashedPW = (await prisma.user.findUnique({ where: { id: uid } }))?.hashedPW
      if (hashedPW) {
        await bcrypt.compare(currentPassword + process.env.NEXTAUTH_SECRET, hashedPW)
        const saltString = newPassword + process.env.NEXTAUTH_SECRET
        const user = await prisma.user.update({
          where: { id: uid },
          data: { hashedPW: await bcrypt.hash(saltString, 10) }
        })
        return Boolean(user)
      }
      throw new ApolloError('Change password failed')
    }
  })
})
