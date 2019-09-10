const withCSS = require('next-css-unpluggable');

module.exports = {
  rootPath: '..',
  publicPath: 'static', // these two are next.js
  publicUrl: '/static/', // specific settings
  watchDirs: ['src'],
  webpack: withCSS(config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: 'ts-loader',
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: [...config.resolve.extensions, '.ts', '.tsx'],
      },
    };
  }),
};
