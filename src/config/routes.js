const express = require('express')
const router = express.Router()

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.set('content-type', 'text/html')
    res.send('Great! It works. Welcome to our API!')
  })
}
