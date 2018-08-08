const add = require('../index').add

test('test environment is working', () => {
  expect(true).toBeTruthy()
})

test('adds 2 numbers', () => {
  // arrange
  const expected = 7
  // act
  const actual = add(3, 4)
  // assert
  expect(actual).toBe(expected)
})
