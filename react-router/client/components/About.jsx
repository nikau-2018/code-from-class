import React from 'react'
import { Link } from 'react-router-dom'

export default function About (props) {
  const { match } = props
  const { id } = match.params

  return (
    <div>
      <div>ABOUT content for id: {id ? id : 'none'} important stuff.</div>
      <Link to="/">Go Home</Link>
    </div>
  )
}
