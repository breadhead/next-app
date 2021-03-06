const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['lodash-es']);
const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = withPlugins(
  [
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
        deliveryUrl:
          process.env.DELIVERY_URL || 'https://danilovsky.stage.breadhead.ru',
        backUrl:
          process.env.BACK_URL || 'http://back.danilovsky.stage.breadhead.ru',
        siteUrl: process.env.SITE_URL || 'http://localhost:3001',
        storageUrl:
          process.env.STORAGE_URL ||
          'https://image.danilovsky.stage.breadhead.ru',
        authCode: process.env.AUTH_CODE_SECRET || '',
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
            apiKey: 'aaa',
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
