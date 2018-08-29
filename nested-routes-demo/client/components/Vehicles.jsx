import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Bike from './Bike'
import Glider from './Glider'
import Skateboard from './Skateboard'
import Windsurfer from './Windsurfer'

const Vehicles = props => {
  const { match } = props

  return (
    <Router>
      <div>
        <Link to="/vehicles/bike">Bike</Link>
        <Link to="/vehicles/windsurfer">Windsurfer</Link>
        <Link to="/vehicles/glider">Glider</Link>
        <Link to="/vehicles/skateboard">Skateboard</Link>

        <Route path={`${match.url}/bike`} component={Bike} />
        <Route path={`${match.url}/windsurfer`} component={Windsurfer} />
        <Route path={`${match.url}/glider`} component={Glider} />
        <Route path={`${match.url}/skateboard`} component={Skateboard} />
      </div>
    </Router>
  )
}

export default Vehicles

