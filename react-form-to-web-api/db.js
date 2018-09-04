const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function addUser (user, db = connection) {
  return db('users').insert(user)
}

function deleteUser (id, db = connection) {
  return db('users').where('id', id).del()
}

function updateUser (user, db = connection) {
  return db('users').where('id', user.id).update(user)
}
