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

import { objectType, mutationField, queryField, stringArg, nonNull, list, scalarType } from 'nexus'
import { anyNormalUser, signedSelf } from '../lib/utils'
import prisma from '../lib/prisma'

export const Modelset = objectType({
  name: 'Modelset',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.description()
    t.model.keywords({ description: 'keywords split by comma or white space' })
    t.model.sampleCode()
    t.model.deprecated()
    t.model.private()
    t.model.organization()
    t.model.owner()
    t.model.artifacts()
    t.model.contributors()
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
          where: { setId: id }
        })
      }
    })
  }
})

export const Query = queryField(t => {
  t.crud.modelset()
  t.crud.modelsets({
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
  t.crud.createOneModelset({
    authorize: anyNormalUser
  })
  t.crud.updateOneModelset({
    authorize: signedSelf(prisma.modelset.findUnique)
  })
  t.crud.deleteOneModelset({
    authorize: signedSelf(prisma.modelset.findUnique, true)
  })
})
