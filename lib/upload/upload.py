# Copyright 2018 TsumiNa
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import json
from os import remove
from pathlib import Path
from shutil import make_archive, unpack_archive

import requests


def uploadModel(filename,
                *,
                keywords=None,
                regMetric=None,
                clsMetric=None,
                descriptor: str = None,
                method: str = None,
                modelset: str = None,
                property_: str = None,
                deprecated=False,
                succeed=True,
                training_env=None,
                training_info=None,
                url='http://localhost:3000/api',
                api_key=''):
    # fileDataBinary = open(filename, 'rb').read()
    # files = {'0': (filename, fileDataBinary)}
    files = {'0': open(filename, 'rb')}
    variables = dict(artifact=None, succeed=succeed, deprecated=deprecated)
    if training_env is not None:
        variables['training_env'] = training_env
    if training_info is not None:
        variables['training_info'] = training_info
    if keywords is not None:
        variables['keywords'] = keywords
    if regMetric is not None:
        variables['regMetric'] = regMetric
    if clsMetric is not None:
        variables['clsMetric'] = clsMetric
    if property_ is not None:
        variables['property_'] = {'where': {'name': property_}, 'create': {'name': property_}}
    if descriptor is not None:
        variables['descriptor'] = {'where': {'name': descriptor}, 'create': {'name': descriptor}}
    if method is not None:
        variables['method'] = {'where': {'name': method}, 'create': {'name': method}}
    if modelset is not None:
        variables['modelset'] = {'where': {'name': modelset}, 'create': {'name': modelset}}

    operations = (
        'operations',
        json.dumps(
            dict(query="""
                    mutation(
                        $artifact: Upload!
                        $keywords: String
                        $property_: PropertyCreateOrConnectWithoutOwnerInput
                        $regMetric: RegressionMetricCreateWithModel
                        $clsMetric: ClassificationMetricCreateWithModel
                        $descriptor: DescriptorCreateOrConnectWithoutOwnerInput
                        $method: MethodCreateOrConnectWithoutOwnerInput
                        $modelset: ModelsetCreateOrConnectWithoutOwnerInput
                        $deprecated: Boolean
                        $succeed: Boolean
                        $training_env: Json
                        $training_info: Json
                        ) { uploadModel(
                            artifact: $artifact
                            keywords: $keywords
                            property: $property_
                            regMetric: $regMetric
                            clsMetric: $clsMetric
                            descriptor: $descriptor
                            method: $method
                            modelset: $modelset
                            deprecated: $deprecated
                            succeed: $succeed
                            training_env: $training_env
                            training_info: $training_info
                            ) {id artifact { etag path filename} }}
                    """,
                 variables=variables)),
    )
    maps = ('map', json.dumps({0: ['variables.artifact']}))
    payload_tuples = [operations, maps]

    return requests.post(url, data=payload_tuples, files=files, headers={'x-api-key': api_key})


def uploadArtifact(filename, *, url='http://localhost/api', api_key=''):
    # fileDataBinary = open(filename, 'rb').read()
    # files = {'0': (filename, fileDataBinary)}
    files = {'0': open(filename, 'rb')}
    operations = (
        'operations',
        json.dumps(
            dict(query="""
                mutation($artifact: Upload! $organizationId: Int $modelsetId: Int) {
                    uploadArtifact(file: $artifact, organizationId: $organizationId, modelsetId: $modelsetId) {
                        etag path
                    }
                }
                """,
                 variables=dict(artifact=None))),
    )
    maps = ('map', json.dumps({0: ['variables.artifact']}))
    payload_tuples = [operations, maps]

    return requests.post(url, data=payload_tuples, files=files, headers={'x-api-key': api_key})


# main
if __name__ == "__main__":
    import sys
    # url = 'https://xenon.ism.ac.jp/api'
    url = 'http://localhost:3000/api'
    p = Path('.')

    properties = [p_ for p_ in p.iterdir() if p_.is_dir()]

    for m in Path('property').iterdir():
        print(str(m))
        if not m.is_dir():
            continue
        z = make_archive(str(m), 'gztar', str(m))

        response = uploadModel(z,
                               keywords='aaa, bbbbb',
                               property_="test.pppp",
                               modelset="sjf8",
                               method="test.sdie",
                               url=url,
                               api_key=sys.argv[1])
        # response = uploadArtifact(z, url=url, api_key=sys.argv[1])
        remove(z)
        print(response.status_code)
        # print(json.loads(response.content)['errors'][0]['message'])
        print(json.loads(response.content))
