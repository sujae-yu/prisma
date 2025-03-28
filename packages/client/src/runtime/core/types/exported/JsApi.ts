import type * as DMMF from '@prisma/dmmf'
import Decimal from 'decimal.js'

import { DecimalJsLike } from './DecimalJsLike'
import { FieldRef } from './FieldRef'
import { ObjectEnumValue } from './ObjectEnums'
import { Skip } from './Skip'

export type Action = keyof typeof DMMF.ModelAction | 'executeRaw' | 'queryRaw' | 'runCommandRaw'

export type JsInputValue =
  | null
  | undefined
  | string
  | number
  | boolean
  | bigint
  | Uint8Array // covers node Buffer as well, but does not introduce dependency on Node typings
  | Date
  | DecimalJsLike
  | ObjectEnumValue
  | RawParameters
  | JsonConvertible
  | FieldRef<string, unknown>
  | JsInputValue[]
  | Skip
  | { [key: string]: JsInputValue }

export interface JsonConvertible {
  toJSON(): unknown
}

export type JsArgs = {
  select?: Selection
  include?: Selection
  omit?: Omission
  [argName: string]: JsInputValue
}

export type Selection = Record<string, boolean | Skip | JsArgs>

export type Omission = Record<string, boolean | Skip>

export type RawParameters = {
  __prismaRawParameters__: true
  values: string
}

export type JsOutputValue =
  | null
  | string
  | number
  | boolean
  | bigint
  | Uint8Array
  | Date
  | Decimal
  | JsOutputValue[]
  | { [key: string]: JsOutputValue }
