import React from 'react'
import request from 'superagent'

class CorsApi extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    this.getUsers()
  }

  getUsers () {
    request
      .get('http://localhost:4000/api/v1/users')
      .then(res => {
        this.setState({
          users: res.body.users
        })
      })
      .catch(err => {
        console.error(err)
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

export default CorsApi
