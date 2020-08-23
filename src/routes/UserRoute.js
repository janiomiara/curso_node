const express = require('express')
const router = express.Router()



const user = router.get('/user', async (req, res, next) => {
  res.json('janio')
})
module.exports = user
