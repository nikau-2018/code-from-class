import React from 'react'

import Wombats from './Wombats'

function App (props) {
  const { dispatch, wombats } = props

  return (
    <div>
      <Wombats dispatch={dispatch} wombats={wombats.sort()} />
    </div>
  )
}

export default App
