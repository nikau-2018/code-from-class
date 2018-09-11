import React from 'react'

import { addWombat } from '../actions'
import Wombat from './Wombat'

export default class Wombats extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  changeHandler = evt => this.setState({
    name: evt.target.value
  })

  render () {
    const { dispatch, wombats } = this.props

    return (
      <div>
        <h1>Wombats</h1>
        <ul>
          {wombats.map((wombat, i) =>
            <Wombat
              key={i}
              name={wombat}
              dispatch={dispatch} />)}
        </ul>

        <input type='text' value={this.state.name} onChange={this.changeHandler} />
        <button onClick={() => dispatch(addWombat(this.state.name))}>Add</button>
      </div>
    )
  }
}
