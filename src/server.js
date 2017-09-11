const express = require('express')
const apiHandler = require('./api')

const server = express()

server.use('/api', apiHandler)

server.listen(3001, err => {
  if (err) throw err
  console.log('> Ready on http://localhost:3001')
})
