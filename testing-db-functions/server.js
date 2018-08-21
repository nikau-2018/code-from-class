const express = require('express')
const hbs = require('express-handlebars')

const homeRoutes = require('./routes')

const server = express()

server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use('/', homeRoutes)

module.exports = server
