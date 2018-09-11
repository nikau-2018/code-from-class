import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/App'
import wombatReducer from './reducer'

const store = createStore(wombatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  const state = store.getState()
  const wombats = state.wombats
  ReactDOM.render(
    <App dispatch={store.dispatch} wombats={wombats} />,
    document.getElementById('app')
  )
}
