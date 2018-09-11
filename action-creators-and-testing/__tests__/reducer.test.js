import reducer from '../client/reducer'
import { addWombat } from '../client/actions'

test('It works', () => {
  expect(true).toBe(true)
})

const initialState = {
  wombats: []
}

test('Wombats is an array after ADD_WOMBAT', () => {
  const action = {
    type: 'ADD_WOMBAT',
    wombat: 'Foo'
  }
  const expected = true
  const actual = reducer(initialState, action)
  expect(Array.isArray(actual.wombats)).toBe(expected)
})

test('ADD_WOMBAT adds a wombat', () => {
  const expected = 'Foo'
  const action = {
    type: 'ADD_WOMBAT',
    wombat: expected
  }
  const actual = reducer(initialState, action).wombats
  expect(actual).toContain(expected)
})

test('addWombat matches the last snapshot', () => {
  expect(addWombat('Hi')).toMatchSnapshot()
})