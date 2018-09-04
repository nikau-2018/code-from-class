const express = require('express')

const db = require('../db')

const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const user = req.body
  db.addUser(user)
    .then(() => {
      res.status(201).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteUser(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
