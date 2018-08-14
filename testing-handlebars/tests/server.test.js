const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('test runner runs', () => {
  expect(true).toBeTruthy()
})

test('/ is welcoming', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const h1 = $('h1').text()
      expect(h1).toMatch('Welcome')
      done()
    })
})

test('/ is colorful', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const liCount = $('ul.color-list li').length
      expect(liCount).toBe(3)
      done()
    })
})
