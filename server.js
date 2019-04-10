const next = require('next')
const express = require('express')
const args = require('args-parser')(process.argv)
const routes = require('./routes')

const FALLBACK_PORT = 3001
const PORT = args.p || FALLBACK_PORT

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(PORT)
})
