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

import { objectType, mutationField, queryField } from 'nexus'
import { anyNormalUser, signSelf } from '../lib/utils'
import prisma from '../lib/prisma'

export const Property = objectType({
  name: 'Property',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.description()
    t.model.owner()
    t.model.symbol()
    t.model.unit()
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
          where: { propertyId: id }
        })
      }
    })
  }
})

export const Query = queryField(t => {
  t.crud.property()
  t.crud.properties({
    pagination: true,
    ordering: {
      id: true,
      name: true
    },
    // TODO: using filtering still have some bugs, active all until new plug-in's release
    filtering: true
  })
})

export const Mutation = mutationField(t => {
  t.crud.createOneProperty({
    authorize: anyNormalUser
  })
  t.crud.updateOneProperty({
    authorize: signSelf(prisma.property.findUnique)
  })
  t.crud.deleteOneProperty({
    authorize: signSelf(prisma.property.findUnique, true)
  })
})
