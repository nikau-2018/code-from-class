import React from 'react'
import { Link } from 'react-router-dom'

const Skateboard = props => {
  return (
    <div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bicis%2C_rollers_y_skate_en_Palermo_%288391464545%29.jpg/640px-Bicis%2C_rollers_y_skate_en_Palermo_%288391464545%29.jpg" />
      </div>


      <Link to="/">Home</Link>
    </div>
  )
}

export default Skateboard

