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

import { objectType, mutationField, queryField, arg, intArg } from 'nexus'
import { anyNormalUser, magicNumGenerator } from '../lib/utils'
import prisma from '../lib/prisma'
import { ApolloError } from 'apollo-server-micro'

export const Artifact = objectType({
  name: 'Artifact',
  definition(t) {
    t.model.id()
    t.model.etag()
    t.model.filename()
    t.model.path()
    t.model.organization()
    t.model.owner()
    t.model.modelset()
  }
})

export const Query = queryField(t => {
  t.crud.artifact()
  t.crud.artifacts({
    pagination: true,
    filtering: true
  })
})

export const Mutation = mutationField(t => {
  t.field('uploadArtifact', {
    type: 'Artifact',
    nullable: false,
    args: {
      file: arg({ type: 'Upload', nullable: false }),
      organizationId: intArg(),
      modelsetId: intArg()
    },
    authorize: anyNormalUser,
    async resolve(_parent, { file }, { minio, uid }) {
      // upload artifact to MinIO
      const magic_num = await magicNumGenerator()
      const { filename, createReadStream } = await file
      const path = `${filename.slice(0, -7)}-$${magic_num}.tar.gz`
      const stream = createReadStream()
      const etag = await minio.putObject(process.env.MINIO_MDL_BUCKET || 'mdl', path, stream)

      // when success
      if (etag) {
        const artifact = await prisma.artifact.create({
          data: {
            etag,
            path,
            filename,
            owner: {
              connect: { id: uid }
            }
          }
        })
        return artifact
      }
      throw new ApolloError('upload failed')
    }
  })
})
