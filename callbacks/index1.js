function startWork (fn) {
  console.log('starting')
  fn()
}

function doWork () {
  console.log('doing')
}

function doMoreWork () {
  console.log('doing more')
}

startWork(doWork)
startWork(doMoreWork)
