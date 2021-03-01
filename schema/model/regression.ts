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

import { inputObjectType, objectType, queryField } from 'nexus'
import { RegressionMetric as RM } from '@prisma/client'

export const RegressionMetric = objectType({
  name: 'RegressionMetric',
  isTypeOf(data) {
    return Boolean(
      (data as RM).maxAbsError ||
        (data as RM).meanAbsError ||
        (data as RM).meanSquareError ||
        (data as RM).pValue ||
        (data as RM).pearsonCorr ||
        (data as RM).r2 ||
        (data as RM).rootMeanSquareError ||
        (data as RM).spearmanCorr
    )
  },
  definition(t) {
    t.model.maxAbsError()
    t.model.meanAbsError()
    t.model.meanSquareError()
    t.model.rootMeanSquareError()
    t.model.r2()
    t.model.pValue()
    t.model.spearmanCorr()
    t.model.pearsonCorr()
    t.model.supplementary()
  }
})

/**
 * Input for new model upload
 */
export const RegressionMetricCreateWithModel = inputObjectType({
  name: 'RegressionMetricCreateWithModel',
  definition(t) {
    t.float('maxAbsError')
    t.float('meanAbsError')
    t.float('meanSquareError')
    t.float('rootMeanSquareError')
    t.float('r2')
    t.float('pValue')
    t.float('pearsonCorr')
    t.float('spearmanCorr')
    t.field('supplementary', { type: 'Json' })
  }
})

// export const QueryRegressionMetric = queryField(t => {
//   t.crud.regressionMetric()
//   t.crud.regressionMetrics({
//     pagination: true,
//     filtering: true,
//     ordering: true
//   })
// })
