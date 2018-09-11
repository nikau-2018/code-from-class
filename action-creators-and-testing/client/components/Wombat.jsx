import React from 'react'

import { delWombat, updateWombat } from '../actions'

export default class Wombat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  changeHandler = evt => this.setState({
    name: evt.target.value
  })

  updateHandler = () => {
    const { dispatch, name } = this.props

    this.setState({ name: '' })
    dispatch(updateWombat(name, this.state.name))
  }

  render () {
    const { dispatch, name } = this.props

    return (
      <li>
        {name}
        <button onClick={() => dispatch(delWombat(this.state.name))}>x</button>
        <input type='text' value={this.state.name} onChange={this.changeHandler} />
        <button onClick={this.updateHandler}>Update</button>
      </li>
    )
  }
}
