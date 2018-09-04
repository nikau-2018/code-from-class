const request = require('supertest')

// Any modules we require after this, such as our server,
// will use this mock if they require the db module
// instead of the actual db module
jest.mock('../../db', () => ({
  getUser: (id) => Promise.resolve(
    {id: id, name: 'test user', email: 'test@user.nz'}
  ),
  getUsers: () => Promise.resolve([
    {id: 2, name: 'test user 2', email: 'test2@user.nz'},
    {id: 4, name: 'test user 4', email: 'test4@user.nz'}
  ]),
  addUser: (user) => Promise.resolve()
}))

// NOTE: This MUST be defined AFTER our mocks
const server = require('../../server')

test('GET /api/v1/users returns all users', () => {
  const expected = 2
  return request(server)
    .get('/api/v1/users')
    // .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.users.length).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('GET /api/v1/users/:id returns a user by ID', () => {
  const expected = 'test@user.nz'
  return request(server)
    .get('/api/v1/users/10')
    // .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.user.id).toBe(10)
      expect(res.body.user.email).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('POST /api/v1/users returns a 201 status', () => {
  return request(server)
    .post('/api/v1/users')
    // .expect('Content-Type', /json/)
    .expect(201)
    .then(res => {
      expect(res.statusCode).toBe(201)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
