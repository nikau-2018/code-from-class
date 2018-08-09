const path = require('path')
const express = require('express')

const port = 3000
const server = express()

server.get('/', (req, res) => {
  res.send('This is SO cool!')
})

server.get('/home', (req, res) => {
  console.log('dirname is:', __dirname)
  res.sendFile(path.join(__dirname, 'home.html'))
})

server.get('/bonehead', (req, res) => {
  console.log(req.query)
  const name = req.query.name
  const adj = req.query.adj
  res.send(`<h1>${name} is a ${adj} bonehead!</h1>`)
})

server.get('/awesome/:name', (req, res) => {
  const name = req.params.name
  res.send(`${name}, you are awesome!`)
})

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})
