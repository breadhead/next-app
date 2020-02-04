import { Assign } from 'utility-types';
import {
  useTranslation as originalUseTranslation,
  UseTranslationResponse,
} from 'react-i18next';

export type TranslateType = (
  key: string,
  options?: { [key: string]: string | number },
) => string;

export interface WithTranslate {
  t: TranslateType;
}

export enum TranslateDict {
  COMMON = 'common',
}

export type WithT<T extends {}> = Assign<T, { t: any }>;
export type TranslationResponse = UseTranslationResponse;
export const useTranslation = originalUseTranslation;
