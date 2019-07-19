const next = require('next')
const express = require('express')
const args = require('args-parser')(process.argv)

const FALLBACK_PORT = 3001
const PORT = args.p || FALLBACK_PORT

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(PORT)
})
