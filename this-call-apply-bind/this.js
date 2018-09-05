// talk about fat arrow functions and 'this'

const dog = {
  hairColor: 'brown',
  bark: function () {
    // can't use a fat arrow function here
    console.log('My hair is', this.hairColor)
  }
}

// this works
// dog.bark()

// this does not work
const makeSound = dog.bark
makeSound()
