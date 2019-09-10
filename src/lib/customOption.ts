import { types } from 'mobx-state-tree';
import { Option, Some, None } from 'tsoption';

type OptionReturnType<T = any> = Option<T>;
const OPTION_MARK = '__OPTION_MARK__';

export const CustomOption = types.custom<string, OptionReturnType>({
  name: 'CustomOption',
  fromSnapshot(snapshot: string): OptionReturnType {
    const value = JSON.parse(snapshot);
    return Option.of(value.value);
  },
  toSnapshot<T>(value: OptionReturnType<T>): string {
    (value as any)[OPTION_MARK] = true;
    return JSON.stringify(value);
  },
  isTargetType(value: string | OptionReturnType): boolean {
    return value instanceof Option;
  },
  getValidationMessage(value: string): string {
    return !!JSON.parse(value)[OPTION_MARK]
      ? ''
      : `this doesnt look like a custom option: ${value}`;
  },
});
