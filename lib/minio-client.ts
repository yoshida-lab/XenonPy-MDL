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

import { Client } from 'minio'

const client = new Client({
  endPoint: process.env.MINIO_END_POINT || '',
  port: Number(process.env.MINIO_PORT) || 9000,
  useSSL: process.env.MINIO_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY || '',
  secretKey: process.env.MINIO_SECRET_KEY || ''
})

// const policy = `
// {
//   "Version": "2012-10-17",
//   "Statement": [
//     {
//       "Action": [
//         "s3:GetObject"
//       ],
//       "Effect": "Allow",
//       "Principal": {
//         "AWS": [
//           "*"
//         ]
//       },
//       "Resource": [
//         "arn:aws:s3:::mdl/*"
//       ],
//       "Sid": ""
//     }
//   ]
// }
// `

// init minio client
// guarantee the root bucket 'mdl' has public download permission
const bucket = process.env.MINIO_MDL_BUCKET ?? 'mdl'

client.bucketExists(bucket, (err, exists) => {
  if (err) throw new Error(err.message)
  if (!exists) {
    client.makeBucket(bucket, 'us-east-1').catch(err => {
      throw new Error(err)
    })
  }
})

export default client
