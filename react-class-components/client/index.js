import React from 'react'
import ReactDOM from 'react-dom'

import HelloTemplate from './Hello'

const data = {
  name: 'humans'
}

const placeToMount = document.getElementById('root')

ReactDOM.render(<HelloTemplate name={data.name} />, placeToMount)
