const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.post('/register', async (req, res) => {
  const {email} = req.body;
  try {
    if (await User.findOne({email}))
      return res.status(400).send({error: 'User already exists'})
    const user = await User.create(req.body);
    return res.send({ user, });
  }catch (err) {
    return res.status(400).send({error: 'Registration failed'})

  }
})

router.get('/user/:id', async (req, res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id)
    return res.send(user);
  }catch (err) {
    return res.status(400).send({error: 'Usuario não existe'})
  }
})

router.delete('/user/update/:id', async (req, res) => {
  try {
    const {id} = req.params
    const DadosUser = await User.findById(id)
    const user = await User.deleteOne({_id: id})
    return res.send({Mensagem: 'Usuario deletado com sucesso', Usuario: DadosUser});
  }catch (err) {
    return res.status(400).send({error: 'Usuario não existe'})
  }
})



module.exports = app => app.use('/', router);
