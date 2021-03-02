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
import prisma from '../lib/prisma'
import { anyNormalUser, signSelf } from '../lib/utils'

export const Descriptor = objectType({
  name: 'Descriptor',
  definition(t) {
    t.model.id()
    t.model.owner()
    t.model.name()
    t.model.description()
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
          where: { descriptorId: id }
        })
      }
    })
  }
})

export const Query = queryField(t => {
  t.crud.descriptor()
  t.crud.descriptors({
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
  t.crud.createOneDescriptor({
    authorize: anyNormalUser
  })
  t.crud.updateOneDescriptor({
    authorize: signSelf(prisma.descriptor.findUnique)
  })
  t.crud.deleteOneDescriptor({
    authorize: signSelf(prisma.descriptor.findUnique, true)
  })
})
