import React from 'react'
import { Link } from 'react-router-dom'

const Glider = props => {
  return (
    <div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Dg800.jpg" />
      </div>

      <Link to="/">Home</Link>
    </div>
  )
}

export default Glider

