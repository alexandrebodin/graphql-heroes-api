const express = require('express')
const apiHandler = require('./api')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(apiHandler)

server.listen(3002, err => {
  if (err) throw err
  console.log('> Ready on http://localhost:3002')
})
