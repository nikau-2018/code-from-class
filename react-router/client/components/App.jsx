import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Team from './Team'

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about/:id?' component={About} />
        <Route path='/team' component={Team} />
      </div>
    </Router>
  )
}

export default App
