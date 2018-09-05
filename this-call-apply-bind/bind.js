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

const makeDogSound = bark.bind(dog, true)
const makeSealSound = bark.bind(seal)

makeDogSound()
makeSealSound(false)
