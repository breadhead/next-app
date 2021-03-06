const cors = require('cors');
const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const cookieParser = require('cookie-parser');

const NextI18NextInstance = require('../src/core/libs/i18n');

const args = require('args-parser')(process.argv);

const apiProxy = require('../apiProxy');
const assetsProxy = require('../assetsProxy');

const FALLBACK_PORT = 3001;
const PORT = args.p || FALLBACK_PORT;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  server.use(cors());
  server.get('/content/*', assetsProxy);
  server.get('/api/:type/:params?', apiProxy);
  server.use(nextI18NextMiddleware(NextI18NextInstance));
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT);
});
