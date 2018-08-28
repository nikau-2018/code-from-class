import React from 'react'
import { Link } from 'react-router-dom'

export default function Home (props) {
  return (
    <div>
      <div>HOME</div>
      <Link to="/about">
        <button>ABOUT</button>
      </Link>
      <Link to="/team">
        <button>TEAM</button>
      </Link>
    </div>
  )
}
