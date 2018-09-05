const dog = {
  hairColor: 'pink'
}

const seal = {
  hairColor: 'brown'
}

function bark (loud) {
  let message = 'My hair is ' + this.hairColor
  if (loud) message = message.toUpperCase()
  console.log(message)
}

bark.call(dog, true)
bark.call(seal, false)

bark.apply(dog, [true])
bark.apply(seal, [false])
