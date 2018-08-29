import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <div>Welcome!</div>

      <Link to="/about">About</Link>
      <Link to="/vehicles">Vehicles</Link>
    </div>
  )
}

export default Home

