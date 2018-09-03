const path = require('path')
const express = require('express')

const users = require('./routes/users')

const server = express()

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// Routes
server.use('/api/v1/users', users)

module.exports = server
