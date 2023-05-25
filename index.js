const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// server.use(cors())
// server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)
server.use(cors())
const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})