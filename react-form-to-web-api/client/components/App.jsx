import React from 'react'

import Form from './Form'

// normally this is done in a separate module
import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }

    this.getUsers = this.getUsers.bind(this)
  }

  getUsers () {
    request
      .get('/api/v1/users')
      .then(res => {
        this.setState({
          users: res.body.users
        })
      })
  }

  componentDidMount () {
    this.getUsers()
  }

  render () {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
        <Form updateUserList={this.getUsers} />
      </div>
    )
  }
}

export default App
