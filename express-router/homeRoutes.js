const fs = require('fs')
const path = require('path')
const express = require('express')

const router = express.Router()

module.exports = router

// GET /
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'color.json')
  fs.readFile(filePath, (err, contents) => {
    if (err) return res.status(500).send('uh oh!')
    const colors = JSON.parse(contents)
    res.render('home', colors)
  })
})

// GET /foo
router.get('/foo', (req, res) => {
  res.send('foo!')
})

// GET /bar
router.get('/bar', (req, res) => {
  res.send('bar!')
})

// GET /demo
router.get('/demo', (req, res) => {
  res.send('home demo!')
})
