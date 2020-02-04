const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ru',
  // otherLanguages: ['en'],
  otherLanguages: ['ru'],
  // localeSubpaths: {
  //   ru: 'ru',
  //   en: 'en',
  // },
  ignoreRoutes: [
    '/_next',
    '/static',
    '/reload',
    '/uploads',
    '/assets',
    'favicon.ico',
  ],
});

module.exports = NextI18NextInstance;
