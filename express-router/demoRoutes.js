const express = require('express')

const router = express.Router()

module.exports = router

// GET /demo
router.get('/:id', (req, res) => {
  res.send('demo demo!')
})

// GET /demo/foo
router.get('/foo', (req, res) => {
  res.send('demo foo!')
})
