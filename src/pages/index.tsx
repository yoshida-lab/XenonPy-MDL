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

import { Typography } from '@material-ui/core'

import { Layout } from '../components/Layout'
import { withUrqlClient } from 'next-urql'
import { PUBLIC_ENTRYPOINT, initSSRUrql, SERVER_ENTRYPOINT } from '../../lib/urql-client'

import styled from 'styled-components'
import { GetStaticProps } from 'next'
import { ApiVersionDocument, DbStatisticDocument } from '../graphql/generated'

const StyledTypography = styled(Typography)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  background: radial-gradient(45deg);
  border: 0;
  borderradius: 3;
  boxshadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48;
  padding: 0 30px;
`

export const getStaticProps: GetStaticProps = async _context => {
  const { client, ssrCache } = initSSRUrql()

  await client.query(ApiVersionDocument).toPromise()
  await client.query(DbStatisticDocument).toPromise()

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData()
    },
    revalidate: 30
  }
}

function Page() {
  return (
    <Layout>
      <StyledTypography variant="body1">Place holder</StyledTypography>
    </Layout>
  )
}

export default withUrqlClient(
  _ssr => ({
    url: typeof window === 'undefined' ? SERVER_ENTRYPOINT : PUBLIC_ENTRYPOINT
  }),
  { ssr: false }
)(Page)
