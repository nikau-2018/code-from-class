const request = require('superagent')

console.log('making the request')

request.get('http://localhost:3000/api/v1/users')
  .then(res => {
    // console.log('res body:', res.body)
    res.body.users.forEach(user => {
      console.log(user.name)
    })
  })
  .catch(err => {
    console.error(err)
  })
