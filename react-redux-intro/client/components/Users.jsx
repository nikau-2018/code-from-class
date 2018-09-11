import React from 'react'
import {connect} from 'react-redux'

function Users (props) {
  return (
    <div>
      {
        props.userList.map(user => {
          return <p key={user.name}>{user.name}</p>
        })
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    userList: state.users
  }
}

export default connect(mapStateToProps)(Users)
