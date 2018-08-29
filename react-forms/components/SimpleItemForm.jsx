import React from 'react'

import colorList from '../color-list'

const defaultState = {
  name: '',
  description: '',
  color: 'aliceblue'
}

class SimpleItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {...defaultState}
  }

  handleSubmit = (evt) => {
    this.props.saveItem(this.state)
    this.setState({...defaultState})
    evt.preventDefault()
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name'
          className='u-full-width'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor='description'>Description</label>
        <textarea name='description'
          className='u-full-width'
          value={this.state.description}
          onChange={this.handleChange}
        />

        <label htmlFor='color'>Colour</label>
        <select name='color' className='u-full-width'
          value={this.state.color}
          onChange={this.handleChange}
        >
          {colorList.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <input type='submit' className='button-primary' value='Add' />
      </form>
    )
  }
}

export default SimpleItemForm
