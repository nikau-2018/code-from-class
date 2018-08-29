import React from 'react'
import {Route} from 'react-router-dom'

import Items from './Items'
import SimpleItems from './SimpleItems'

const App = ({children}) => (
  <div className="container">
    <Route exact path='/' component={Items} />
    <Route path='/simple' component={SimpleItems} />
  </div>
)

export default App
