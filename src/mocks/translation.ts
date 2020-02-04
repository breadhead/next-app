import { TranslationResponse } from '@app/core/libs/WithTranslate';

export const mockTranslation = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  t: (...rest: any[]) => {
    return 'mock';
  },
  i18n: { language: 'ru' },
} as TranslationResponse;
