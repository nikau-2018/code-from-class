const express = require('express')
const hbs = require('express-handlebars')

const homeRoutes = require('./homeRoutes')
const demoRoutes = require('./demoRoutes')

const server = express()
module.exports = server

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')

server.use('/', homeRoutes)
server.use('/demo', demoRoutes)
