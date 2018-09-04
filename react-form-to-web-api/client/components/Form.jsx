import React from 'react'

import api from '../api'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    api.addUser(this.state)
      .then(this.props.updateUserList)
  }

  render () {
    return (
      <div className='form'>
        <p>Name: <input name='name' onChange={this.handleChange} /></p>
        <p>Email: <input name='email' onChange={this.handleChange} /></p>
        <p><button onClick={this.handleClick}>Add user</button></p>
      </div>
    )
  }
}

export default Form
