const request = require('supertest')
const server = require('../server')

test('test harness is working', () => {
  expect(true).toBeTruthy()
})

test('/ is cool', () => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('cool')
    })
})

test('/awesome contains a name', () => {
  const name = 'Joe'
  request(server)
    .get('/awesome/' + name)
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch(name)
    })
})

test('/home is welcoming', () => {
  request(server)
    .get('/home')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('Welcome')
      console.log(res.text)
    })
})
