function foo () {
  console.log('I am foo')
  return 'foo here'
}

function run (fn) {
  fn()
}

function get () {
  return foo()
}

// pass a function to another function
run(foo)

// return a function from a function
const fn = get()
fn()
