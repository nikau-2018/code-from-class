import React from 'react'
import { Link } from 'react-router-dom'

const Bike = props => {
  return (
    <div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/640px-Left_side_of_Flying_Pigeon.jpg" />
      </div>

      <Link to="/">Home</Link>
    </div>
  )
}

export default Bike

