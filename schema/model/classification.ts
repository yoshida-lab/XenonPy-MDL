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

import { ClassificationMetric as CM } from '@prisma/client'
import { inputObjectType, objectType, queryField } from 'nexus'

export const ClassificationMetric = objectType({
  name: 'ClassificationMetric',
  isTypeOf(data) {
    return Boolean(
      (data as CM).f1 ||
        (data as CM).accuracy ||
        (data as CM).npv ||
        (data as CM).ppv ||
        (data as CM).precision ||
        (data as CM).prevalence ||
        (data as CM).recall ||
        (data as CM).sensitivity ||
        (data as CM).specificity
    )
  },
  definition(t) {
    t.model.accuracy()
    t.model.precision()
    t.model.recall()
    t.model.f1()
    t.model.sensitivity()
    t.model.prevalence()
    t.model.specificity()
    t.model.ppv()
    t.model.npv()
    t.model.supplementary()
  }
})

/**
 * Input for new model upload
 */
export const ClassificationMetricCreateWithModel = inputObjectType({
  name: 'ClassificationMetricCreateWithModel',
  definition(t) {
    t.float('accuracy')
    t.float('precision')
    t.float('recall')
    t.float('f1')
    t.float('sensitivity')
    t.float('prevalence')
    t.float('specificity')
    t.float('npv')
    t.float('ppv')
    t.field('supplementary', { type: 'Json' })
  }
})
