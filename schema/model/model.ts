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

import absoluteUrl from 'next-absolute-url'
import { ApolloError } from 'apollo-server-micro'
import { queryField, objectType, unionType, mutationField, arg, booleanArg, stringArg, list, nonNull } from 'nexus'
import { anyNormalUser, magicNumGenerator, removeNulls } from '../../lib/utils'
import { ClassificationMetricCreateWithModel, RegressionMetricCreateWithModel } from '.'

/**
 * metrics such as mae, r2, recall
 */
export const Metric = unionType({
  name: 'Metric',
  definition(t) {
    t.members('ClassificationMetric', 'RegressionMetric')
  }
})

/**
 * Model Type
 */
export const Model = objectType({
  name: 'Model',
  definition(t) {
    // from prisma plugin
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.artifact()
    t.model.keywords({ description: 'keywords split by comma or white space' })
    t.model.deprecated()
    t.model.succeed()
    t.model.trainingEnv()
    t.model.trainingInfo()
    t.model.download()
    t.model.owner()

    t.field('metrics', {
      type: 'Metric',
      async resolve({ id }, _args, { prisma }) {
        return (
          (await prisma.classificationMetric.findUnique({
            where: { modelId: id }
          })) ||
          (await prisma.regressionMetric.findUnique({
            where: { modelId: id }
          }))
        )
      }
    })

    // computed fields
    t.string('descriptor', {
      description: 'name of descriptor',
      async resolve({ descriptorId }, _args, { prisma }) {
        const ret = await prisma.descriptor.findUnique({
          where: { id: descriptorId! },
          select: {
            name: true
          }
        })
        return removeNulls(ret?.name)
      }
    })

    t.string('method', {
      description: 'name of method',
      async resolve({ methodId }, _args, { prisma }) {
        const ret = await prisma.method.findUnique({
          where: { id: methodId! },
          select: {
            name: true
          }
        })
        return removeNulls(ret?.name)
      }
    })

    t.string('property', {
      description: 'name of property',
      async resolve({ propertyId }, _args, { prisma }) {
        const ret = await prisma.property.findUnique({
          where: { id: propertyId! },
          select: {
            name: true
          }
        })
        return removeNulls(ret?.name)
      }
    })

    t.string('modelset', {
      description: 'name of modelset',
      async resolve({ setId }, _args, { prisma }) {
        const ret = await prisma.modelset.findUnique({
          where: { id: setId! },
          select: {
            name: true
          }
        })
        return removeNulls(ret?.name)
      }
    })
  }
})

/**
 * Model url type
 */
export const ModelUrl = objectType({
  name: 'ModelUrl',
  definition(t) {
    t.string('etag', { nullable: false }), t.string('url', { nullable: false }), t.int('id', { nullable: false })
  }
})

/**
 * Get Model info and download link
 */
export const QueryModel = queryField(t => {
  // private models should be protected
  t.crud.model()
  t.crud.models({
    filtering: true,
    ordering: true,
    pagination: true
  })

  t.field('getModelUrls', {
    type: ModelUrl,
    list: true,
    args: {
      ids: arg({ type: nonNull(list(nonNull('Int'))), description: 'id of Models' })
    },
    async resolve(_parent, { ids }, { prisma, req }) {
      await prisma.model.updateMany({
        where: { id: { in: ids } },
        data: {
          download: { increment: 1 }
        }
      })
      const models = await prisma.model.findMany({
        where: { id: { in: ids } },
        select: {
          id: true,
          artifact: {
            select: {
              etag: true,
              path: true
            }
          }
        }
      })
      const { origin } = absoluteUrl(req)
      return models.map(s => {
        const { id, artifact } = s
        const url = `${origin}/${process.env.MINIO_MDL_BUCKET || 'mdl'}/${artifact.path}`
        return { id, url, etag: artifact.etag }
      })
    }
  })
})

const splitFilename = (filename: string) => {
  const extensionList = ['.tar.gz', '.tar.bz2', '.zip', '.7z', '.gzip', '.bz2']

  for (let ext of extensionList) {
    if (filename.endsWith(ext)) {
      return [filename.slice(0, -ext.length), ext]
    }
  }
  throw new Error(`uploaded file must be compressed in ${extensionList}`)
}

export const MutationModel = mutationField(t => {
  t.field('uploadModel', {
    type: 'Model',
    nullable: false,
    description: 'Upload a model to MDL server',
    args: {
      // required
      artifact: arg({ type: 'Upload', nullable: false }),

      // keywords or descriptor, at least one is required
      keywords: stringArg(),
      property: arg({ type: 'PropertyCreateOrConnectWithoutOwnerInput' }),

      // create
      regMetric: arg({ type: RegressionMetricCreateWithModel }),
      clsMetric: arg({ type: ClassificationMetricCreateWithModel }),

      // create or connect
      descriptor: arg({ type: 'DescriptorCreateOrConnectWithoutOwnerInput' }),
      method: arg({ type: 'MethodCreateOrConnectWithoutOwnerInput' }),
      modelset: arg({ type: 'ModelsetCreateOrConnectWithoutOwnerInput' }),

      // scale, that can be assigned directly
      deprecated: booleanArg(),
      succeed: booleanArg(),
      training_env: arg({ type: 'Json' }),
      training_info: arg({ type: 'Json' })
    },
    authorize: anyNormalUser, // any normal user can upload models
    async resolve(_parent, { artifact, keywords, property, ...remained }, { minio, uid, prisma }) {
      // check keywords and property
      if (!keywords && !property) {
        throw new ApolloError('upload failed. user have to provide at least one keywords or property object')
      }

      /* upload artifact to MinIO */
      const { filename, createReadStream } = await artifact

      // test and split suffix from filename
      const [stem, suffix] = splitFilename(filename)

      // calculate path
      const { method, modelset, descriptor } = remained
      const propertyName = property?.create?.name || property?.where?.name || 'unknown.property'
      const methodName = method?.create?.name || method?.where?.name || 'unknown.method'
      const descriptorName = descriptor?.create?.name || descriptor?.where?.name || 'unknown.descriptor'
      const modelsetName = modelset?.create?.name || modelset?.where?.name || 'unknown.modelset'
      const magic_num = await magicNumGenerator()
      const path = `${modelsetName}/${propertyName}/${descriptorName}/${methodName}/${stem}-$${magic_num}${suffix}`

      // upload
      const stream = createReadStream()
      const etag = await minio.putObject(process.env.MINIO_MDL_BUCKET || 'mdl', path, stream)

      if (etag) {
        // if success
        const { regMetric, clsMetric, deprecated, succeed, training_env, training_info } = remained
        try {
          console.log(property?.where)

          const model = await prisma.model.create({
            data: {
              // scale
              owner: {
                connect: { id: uid }
              },
              deprecated: removeNulls(deprecated),
              succeed: removeNulls(succeed),
              keywords,
              trainingEnv: removeNulls(training_env),
              trainingInfo: removeNulls(training_info),

              // create
              regMetric: { create: { ...regMetric } },
              clsMetric: { create: { ...clsMetric } },
              artifact: {
                create: {
                  etag,
                  path,
                  filename,
                  ownerId: uid!
                }
              },

              // TODO: if where matched nothing and creating throw errors, the uploading failed
              // That not an error, but can be improved for user-friendly
              property: {
                connectOrCreate: removeNulls(property)
              },
              descriptor: {
                connectOrCreate: removeNulls(descriptor)
              },
              method: {
                connectOrCreate: removeNulls(method)
              },
              modelset: {
                connectOrCreate: removeNulls(modelset)
              }
            }
          })
          return model
        } catch (e) {
          await minio.removeObject(process.env.MINIO_MDL_BUCKET || 'mdl', path)
          throw e
        }
      }
      throw new ApolloError('Error occurred in artifact uploading')
    }
  })
})
