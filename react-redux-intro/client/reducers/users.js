import {users as userData} from '../users'
import {ADD_USER} from '../actions'

const initialState = userData.users

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, {name: action.userName}]
    default:
      return state
  }
}
