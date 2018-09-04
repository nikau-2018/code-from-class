const express = require('express')
const cors = require('cors')

const users = require('./routes/users')

const server = express()

// Middleware
server.use(cors())
server.use(express.json())

// Routes
server.use('/api/v1/users', users)

module.exports = server
