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

import { objectType, queryField } from 'nexus'

export const Organization = objectType({
  name: 'Organization',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.description()
    t.model.owner()
    t.model.modelsets()
    t.model.members()
    t.model.artifacts()
  }
})

export const Query = queryField(t => {
  t.crud.organization()
  t.crud.organizations({
    pagination: true,
    ordering: {
      id: true,
      name: true
    },
    // TODO: using filtering still have some bugs, active all until new plug-in's release
    filtering: true
  })
})
