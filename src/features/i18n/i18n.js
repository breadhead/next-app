const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['en'],
  localeSubpaths: {
    ru: 'ru',
    en: 'en',
  },
});

module.exports = NextI18NextInstance;
