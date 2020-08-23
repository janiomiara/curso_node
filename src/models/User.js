const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nome: { type: String, required: true, max: 100 },
  email: { type: String, required: true },
  password: {type: String, required: true},
})

const User = module.exports = mongoose.model('User', UserSchema);
module.exports = User

