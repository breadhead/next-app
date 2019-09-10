import { Option, Some, None } from 'tsoption'
import { types } from 'mobx-state-tree'

type OptionReturnType<T = any> = Option<T>

export const CustomOption = types.custom<string, OptionReturnType>({
  name: 'CustomOption',
  fromSnapshot(snapshot: string): OptionReturnType {
    const value = JSON.parse(snapshot)
    return Option.of(value)
  },
  toSnapshot<T>(value: OptionReturnType<T>): string {
    const result = JSON.stringify(value)
    return result
  },
  isTargetType(value: string | OptionReturnType): boolean {
    return value instanceof Option
  },
  getValidationMessage(value: string): string {
    return ''
  },
})

const DecimalPrimitive = types.custom<string, Date>({
  name: 'Date',
  fromSnapshot(value: string) {
    return new Date(value)
  },
  toSnapshot(value: Date) {
    return value.toString()
  },
  isTargetType(value: string | Date): boolean {
    return value instanceof Date
  },
  getValidationMessage(value: string): string {
    if (/^-?\d+\.\d+$/.test(value)) return '' // OK
    return `'${value}' doesn't look like a valid decimal number`
  },
})
