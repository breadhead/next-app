const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['lodash-es']);
const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = withPlugins(
  [
    [
      withCSS,
      {
        cssModules: true,
      },
    ],
    [withBundleAnalyzer],
    [
      withSourceMaps,
      {
        devtool: 'hidden-source-map',
      },
    ],
    // withTM needs to be last
    [withTM],
    {
      publicRuntimeConfig: {
        isDev: process.env.NODE_ENV !== 'production',
        testing: process.env.TESTING,
        backUrl: process.env.BACK_URL || 'http://back.danilovsky.breadhead.ru',
        siteUrl: process.env.SITE_URL || 'http://localhost:3001',
        storageUrl:
          process.env.STORAGE_URL || 'https://image.danilovsky.breadhead.ru',
        authCode:
          process.env.AUTH_CODE_SECRET ||
          '09a165e1-10de-44c9-97b2-336847860e46',
        cypress_backUrl:
          process.env.BACK_URL || 'http://back.danilovsky.breadhead.ru',
      },
    },
  ],
  {
    webpack(config, options) {
      if (options.isServer) {
        config.devtool = 'source-map';
      }

      if (!options.dev) {
        const {
          BugsnagSourceMapUploaderPlugin,
        } = require('webpack-bugsnag-plugins');

        config.plugins.push(
          new BugsnagSourceMapUploaderPlugin({
            apiKey: 'db4688dc1ac08c70cdcbb6fa2407f0a5',
            overwrite: true,
            releaseStage: 'production',
            publicPath: options.isServer ? '.next/server/' : '*/_next/',
          }),
        );
      }

      return config;
    },
  },
);
