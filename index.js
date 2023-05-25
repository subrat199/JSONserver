const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://lime-panicky-seahorse.cyclic.app')
    res.header('Access-Control-Allow-Headers', '*')
    next()
  })
server.listen(8000, () => {
  console.log('JSON Server is running')
})