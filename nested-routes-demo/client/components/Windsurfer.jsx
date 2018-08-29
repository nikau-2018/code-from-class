import React from 'react'
import { Link } from 'react-router-dom'

const About = props => {
  return (
    <div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Windsurfer_%281%29.jpg/640px-Windsurfer_%281%29.jpg" />
      </div>

      <Link to="/">Home</Link>
    </div>
  )
}

export default About

