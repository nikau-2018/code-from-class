// import {colors} from '../colors'
import {ADD_COLOR} from '../actions'

const initialState = []

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_COLOR:
      return [...state, {name: action.color}]
    default:
      return state
  }
}
