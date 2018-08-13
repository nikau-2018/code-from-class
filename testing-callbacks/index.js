const add = require('./slow-add')

add(4, 5, showResult)

function showResult (result) {
  console.log(result)
}
