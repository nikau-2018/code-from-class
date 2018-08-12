function calc (fn, num1, num2, next) {
  console.log('calc')
  const result = fn(num1, num2)
  next(result)
}

function add (num1, num2) {
  console.log('add')
  return num1 + num2
}

function printResult (result) {
  console.log(result)
}

calc(add, 4, 8, printResult)