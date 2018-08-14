const express = require('express')
const hbs = require('express-handlebars')

const server = express()
module.exports = server

server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.get('/', (req, res) => {
  const user = {
    isAwesome: false,
    name: {
      first: 'James',
      last: 'Built'
    },
    colors: [
      {name: 'blue'},
      {name: 'red'},
      {name: 'green'}
    ],
    friends: [
      'Tom',
      'Lauren',
      'Alisa'
    ]
  }
  res.render('home', user)
})
