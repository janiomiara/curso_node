const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/curso_node', { useNewUrlParser: true })

mongoose.set('useCreateIndex', true)

module.exports = mongoose.connection
