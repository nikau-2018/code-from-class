import React from 'react'

import Dog from './Dog'

export default class HelloTemplate extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      catName: 'Fuzzy'
    }
  }

  render () {
    const { name } = this.props
    return (
      <div>
        <div>Hi, {name}</div>
        <Dog />
        <div>(A picture of {this.state.catName}...)</div>
      </div>
    )
  }
}
