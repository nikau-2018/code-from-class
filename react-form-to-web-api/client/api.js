import request from 'superagent'

function addUser (user) {
  return request
    .post('/api/v1/users')
    .send(user)
    .then((res) => {
      console.log('success')
    })
    .catch(err => {
      console.log(err.message)
    })
}

export default {
  addUser
}
