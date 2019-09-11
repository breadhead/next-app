import { ButtonKind } from '../ButtonKind';

export const getKindClassName = (
  kind: ButtonKind,
  s: { [key: string]: string },
): string => {
  return {
    [ButtonKind.Primary]: s.primary,
    [ButtonKind.Secondary]: s.secondary,
    [ButtonKind.Extra]: s.extra,
  }[kind];
};
