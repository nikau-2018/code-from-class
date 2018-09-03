import React from 'react'

// normally this is done in a separate module
import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    request
      .get('/api/v1/users')
      .then(res => {
        this.setState({
          users: res.body.users
        })
      })
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
      </div>
    )
  }
}

export default App
