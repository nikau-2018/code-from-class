const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew']
}

const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return {
        wombats: [...state.wombats, action.wombat]
      }

    case 'DEL_WOMBAT':
      return {
        wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
      }

    case 'UPDATE_WOMBAT':
      return {
        wombats: [
          ...state.wombats.filter(wombat => wombat !== action.wombat),
          action.newWombat
        ]
      }

    default:
      return state
  }
}

export default wombatReducer
