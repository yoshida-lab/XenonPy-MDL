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

import { objectType, queryField, queryType } from 'nexus'

/**
 * Query current API version
 */
export const ApiVersion = queryType({
  definition(t) {
    t.string('apiVersion', {
      description: 'The version of currently API',
      nullable: false,
      resolve: _ => '0.2.4'
    })
  }
})

export const DBStatisticType = objectType({
  name: 'DBStatistic',
  description: 'Statistic information of current database',
  definition(t) {
    t.int('all')
    t.int('regressionModels')
    t.int('classificationModels')
    t.int('others')
  }
})

/**
 * Query number of all models
 */
export const Query = queryField(t => {
  t.field('statistic', {
    type: DBStatisticType,
    description: 'Number of all models',
    nullable: false,
    resolve: async (_, __, { prisma }) => {
      const ret = await prisma.model.count({
        select: {
          _all: true,
          regMetricId: true,
          clsMetricId: true
        }
      })
      return {
        all: ret._all,
        regressionModels: ret.regMetricId,
        classificationModels: ret.clsMetricId,
        others: ret._all - ret.clsMetricId! - ret.regMetricId!
      }
    }
  })
})
