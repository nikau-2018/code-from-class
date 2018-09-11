export const ADD_COLOR = 'ADD_COLOR'
export const ADD_USER = 'ADD_USER'

export function addColor (color) {
  return {
    type: ADD_COLOR,
    color: color
  }
}

export function addUser (userName) {
  return {
    type: ADD_USER,
    userName: userName
  }
}
