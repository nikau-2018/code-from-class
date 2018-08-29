import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <Route path='/' component={App} />
    </Router>,
    document.getElementById('app')
  )
})
