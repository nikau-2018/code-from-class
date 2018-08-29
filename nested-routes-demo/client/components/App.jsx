import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Vehicles from './Vehicles'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/vehicles" component={Vehicles} />
      </div>
    </Router>
  )
}

export default App

