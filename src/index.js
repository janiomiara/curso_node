const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')
const db = require('./config/db')

const index = express()
const { port } = config

index.use(bodyParser.json())


db.on('connected', function() {
  console.log('connected!')
})

db.on('disconnected', function() {
  console.log('disconnected!')
})

db.on('error', function(error) {
  console.log('Connection error: ' + error)
})

require('./routes/UserRoute')(index)
//require('./controller/UserController')(index);

index.listen(port, () => {
  console.log(`App rodando na porta: http://localhost:${port}`)
})
