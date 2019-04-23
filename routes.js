const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  .add({ pattern: '/', page: 'index' })
  .add({ pattern: '/time', page: 'time' })
