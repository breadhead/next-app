const withCSS = require('next-css-unpluggable')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(
  withCSS({
    cssModules: true,
  }),
)
