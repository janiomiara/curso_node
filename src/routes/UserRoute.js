const express = require('express')
const router = express.Router()

module.exports = app => {
  const user = require('../controller/UserController')
  const router = require('express').Router()

  router.post('/register', user.create)
  router.get('/user/:id', user.findOne)
  router.put('/user/update/:id', user.update)
  router.delete('/user/delete/:id', user.delete)

  app.use('/', router)
}

