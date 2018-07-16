const express = require('express')
const server = express()
const PORT = 9000

server.use('/', express.static('dist'))
server.listen(PORT)
console.log('Server listening on port', PORT)
