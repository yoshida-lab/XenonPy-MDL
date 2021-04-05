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

import { AuthenticationError } from 'apollo-server-micro'
import { customAlphabet, nanoid } from 'nanoid/async'
import { ArgsValue, GetGen, SourceValue } from 'nexus/dist/core'
import { FieldAuthorizeResolver } from 'nexus/dist/plugins/fieldAuthorizePlugin'

/**
 * ~1 year needed, in order to have a 1% probability of at least on collision
 * in speed of 10,000 IDs per second
 */
const alphabet = '346789abcdefghijkmnpqrtwxyz'
export const keyGenerator = customAlphabet(alphabet, 10)

/**
 * generate 5 characters
 */
export const magicNumGenerator = async () => await nanoid(5)

/**
 * Check the user authorization.
 * Return true when usr is the owner of field.
 *
 * @param args Parameters passed from graphQL input
 * @param uid Computed user id in middleware, normal user has id > 0, super user id is -1
 * @param userMatcher Prisma findUnique function
 * @param allowSuperUser Set true to allow super user
 */

export function signedSelf<T extends string, F extends string>(
  userMatcher: ({ where, select }: any) => Promise<{ ownerId: number | null } | { ownerId: number | null }[] | null>,
  allowSuperUser: boolean = false
) {
  const authorize: FieldAuthorizeResolver<T, F> = async (
    _root: SourceValue<T>,
    args: ArgsValue<T, F> & any,
    { uid }: GetGen<'context'>
  ) => {
    // pass super user
    if (allowSuperUser && uid === -1) {
      return true
    }

    // pass owner
    const query = {
      where: { ...removeNulls(args.where) },
      select: { ownerId: true }
    }
    console.log(userMatcher)

    if (userMatcher.name !== 'findUnique') {
      Object.assign(query, { distinct: ['ownerId'] })
    }

    let checker
    try {
      checker = await userMatcher({
        distinct: ['ownerId'],
        where: { ...removeNulls(args.where) },
        select: { ownerId: true }
      })
    } catch {
      checker = await userMatcher({
        where: { ...removeNulls(args.where) },
        select: { ownerId: true }
      })
    }

    if (checker === null) {
      // accept null operations
      return true
    } else {
      if (Array.isArray(checker)) {
        if (checker.length === 0 || (checker.length === 1 && checker[0].ownerId === uid)) {
          return true
        }
      } else {
        if (checker.ownerId === uid) {
          return true
        }
      }
    }

    // reject
    return new AuthenticationError(`normal${allowSuperUser ? '/super' : ''} user authorization needed`)
  }
  return authorize
}

/**
 * Current user is normal user
 */
export const anyNormalUser = async <T extends string, F extends string>(
  _root: SourceValue<T>,
  _args: ArgsValue<T, F>,
  { uid }: GetGen<'context'>
): Promise<boolean | Error> => Boolean(uid) && uid! > 0

/**
 * Current user is super user
 */
export const superUser = async <T extends string, F extends string>(
  _root: SourceValue<T>,
  _args: ArgsValue<T, F>,
  { uid }: GetGen<'context'>
): Promise<boolean | Error> => uid === -1

/**
 * No user authorized
 */
export const anySignedIn = async <T extends string, F extends string>(
  _root: SourceValue<T>,
  _args: ArgsValue<T, F>,
  { uid }: GetGen<'context'>
): Promise<boolean | Error> => Boolean(uid)

/**
 * Remove null and convert it to undefined
 * @param obj any object */
export function removeNulls(obj: any): any {
  if (obj === null) {
    return undefined
  }
  if (typeof obj === 'object') {
    for (let key in obj) {
      obj[key] = removeNulls(obj[key])
    }
  }
  return obj
}
