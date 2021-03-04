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

import { ApolloError } from 'apollo-server-micro'
import { MutationUploadModelArgs } from '../../lib/graphql'

/**
 * Filename with suffix
 * @param filename filename
 */
export const splitFilename = (filename: string) => {
  const extensionList = ['.tar.gz', '.tar.bz2', '.zip', '.7z', '.gzip', '.bz2']

  for (let ext of extensionList) {
    if (filename.endsWith(ext)) {
      return [filename.slice(0, -ext.length), ext]
    }
  }
  throw new ApolloError(`uploaded file must be compressed in ${extensionList}`)
}

/**
 * Check uploadModel input
 * @param obj any input object
 */
export const isValidated = (obj?: any) => {
  return obj && Object.keys(obj).length !== 0
}

type subUploadModelArgs =
  | MutationUploadModelArgs['property']
  | MutationUploadModelArgs['method']
  | MutationUploadModelArgs['modelset']
  | MutationUploadModelArgs['descriptor']

export const reformatName = (obj: subUploadModelArgs): typeof obj => {
  const regex = /((\s+)|(-+))+/g

  if (obj?.create?.name) {
    obj.create.name = obj.create.name.replace(regex, '_').toLowerCase()
  }
  if (obj?.where?.name) {
    obj.where.name = obj.where.name.replace(regex, '_').toLowerCase()
  }

  return obj
}
