const express = require('express')
const User = require('../models/User')
const router = express.Router()

exports.create = async (req, res) => {
  const { email } = req.body
  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'Usuario ja existe com esse email' })
    const user = await User.create(req.body)
    return res.send({ user })
  } catch (err) {
    return res.status(400).send({ error: 'Falha ao registrar' })
  }
}

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) return res.status(400).send({ error: 'Para acessar o um usuario passe um id' })
    const user = await User.findById(id)
    return res.send(user)
  } catch (err) {
    return res.status(400).send({ error: 'Usuario não existe' })
  }
}

exports.update = async (req, res) => {
  try {
    const { id } = req.params

    await User.update({ _id: id }, {
      $set: req.body,
    })
    return res.send({ Mensagem: 'Usuario modificado', User: req.body })
  } catch (e) {
    res.send('Usuario não encontrado')
  }
}

exports.delete = async (req, res) => {
  try {
    const { id } = req.params
    const DadosUser = await User.findById(id)
    await User.deleteOne({ _id: id })
    return res.send({ Mensagem: 'Usuario deletado com sucesso', Usuario: DadosUser })
  } catch (err) {
    return res.status(400).send({ error: 'Usuario não existe' })
  }
}



