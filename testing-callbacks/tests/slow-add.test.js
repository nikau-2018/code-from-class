const add = require('../slow-add')

test('test runner runs', () => {
  expect(true).toBeTruthy()
})

test('add adds', (done) => {
  const expected = 13
  add(6, 7, (result) => {
    expect(result).toBe(expected)
    done()
  })
})
