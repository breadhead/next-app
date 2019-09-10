const withPlugins = require('next-compose-plugins');
const withCSS = require('next-css-unpluggable');

module.exports = withPlugins([
  [
    withCSS,
    {
      cssModules: true,
    },
  ],
  {
    publicRuntimeConfig: {
      backUrl: process.env.BACK_URL || 'http://localhost:3000',
      backUrlServer: process.env.BACK_URL_SERVER || 'http://localhost:3000',
    },
  },
]);
