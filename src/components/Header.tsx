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

import React from 'react'
import { Link } from '../components/Link'
import { useSession, signOut } from 'next-auth/client'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Box, ListItemText, List } from '@material-ui/core'
import { useQuery, gql } from 'urql'
import { useApiVersionQuery, useDbStatisticQuery } from '../graphql/generated'

export const Header: React.FC = () => {
  const [session] = useSession()
  const [version] = useApiVersionQuery()
  const [statistic] = useDbStatisticQuery()

  // SSR or SSG need fetch data on the fly
  // give a default value to escape the error
  const apiVersion = version.data?.apiVersion ?? 'unknown'
  const modelCounts = statistic.data?.statistic.all ?? 0

  let loginArea = !session ? (
    <Button color="inherit">
      <Link color="inherit" href={'/api/auth/signin'}>
        Login
      </Link>
    </Button>
  ) : (
    <Typography variant="body2" color="textSecondary">
      <div>
        <Box>
          {' '}
          <List component="div">
            <ListItemText>
              {session.user.name}({session.user.email})
            </ListItemText>
            <ListItemText>API key: {session.apiKey}</ListItemText>
          </List>
          <Button onClick={() => signOut()}>SignOut</Button>
        </Box>
      </div>
    </Typography>
  )
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <List component="div">
              <ListItemText>XenonPy.MDL</ListItemText>
              <ListItemText>
                <Link color="textSecondary" href={'/api'}>
                  API Version: {apiVersion}
                </Link>
              </ListItemText>
              <ListItemText>
                <Typography variant="overline">Total models: {modelCounts}</Typography>
              </ListItemText>
            </List>
          </Typography>
          {loginArea}
        </Toolbar>
      </AppBar>
    </div>
  )
}
