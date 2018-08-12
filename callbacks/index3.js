const fs = require('fs')

function getFiles (dir, callback) {
  fs.readdir(dir, callback)
  // or if we were using the sync function
  // const files = fs.readdirSync(__dirname)
}

function showFiles (err, files) {
  if (err) {
    console.error(err)
  } else {
    files.forEach(file => {
      console.log(file)
    })
  }
}

console.log('before')
getFiles(__dirname, showFiles)
console.log('after')
