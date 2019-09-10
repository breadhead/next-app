const cors = require('cors');
const express = require('express');
const next = require('next');
const args = require('args-parser')(process.argv);
const cookieParser = require('cookie-parser');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./src/lib/i18n/i18n');

const FALLBACK_PORT = 3001;
const PORT = args.p || FALLBACK_PORT;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  server.use(cors());
  server.use(nextI18NextMiddleware(nextI18next));
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT);
});
