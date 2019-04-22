const withPlugins = require('next-compose-plugins')
const withCSS = require('next-css-unpluggable')
const withTypescript = require('@zeit/next-typescript')

const tsIncludes = require('./.workarounds/ts-includes')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withPlugins(
  [
    [
      withTypescript,
      {
        webpack: tsIncludes,
      },
    ],
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
  ],
  {
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer) {
        config.plugins.push(new ForkTsCheckerWebpackPlugin())
      }

      return config
    },
  },
)
