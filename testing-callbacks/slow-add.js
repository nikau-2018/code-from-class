module.exports = add

function add (num1, num2, callback) {
  const result = num1 + num2
  setTimeout(() => {
    callback(result)
  }, 2000)
}
