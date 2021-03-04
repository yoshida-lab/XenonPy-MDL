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

import { initUrqlClient } from 'next-urql'

import { ssrExchange, dedupExchange, cacheExchange, fetchExchange } from 'urql'

export const PUBLIC_ENTRYPOINT = process.env.PUBLIC_API_ENTRYPOINT ?? 'http://localhost:3000/api'
export const SERVER_ENTRYPOINT = process.env.SERVER_API_ENTRYPOINT ?? 'http://localhost:3000/api'

export function initSSRUrql() {
  const ssrCache = ssrExchange({ isClient: false })
  const client = initUrqlClient(
    {
      url: SERVER_ENTRYPOINT,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
    },
    false
  )!

  return { client, ssrCache }
}
