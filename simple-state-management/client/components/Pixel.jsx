import React from 'react'

// This is an example of a function which does what you need, but which you don't necessarily need
// to understand in order to use! It generates a random hex colour string, like '#FFFFFF'. Try it in
// the node REPL.
const randomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

const width = 20
const height = width

export default class Pixel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        width,
        height,
        backgroundColor: randomColour()
      }
      // Uncomment this line to have all your pixels update their colour every couple of seconds.
      // There are more efficient ways of doing this, but it's a nice effect to play around with.
      // update: setInterval(this.changeColour, 1000)
    }
  }

  changeColour = () => {
    // Create a new style object to update this.state with
    const style = {
      width,
      height,
      backgroundColor: randomColour()
    }

    // After calling `this.setState`, React will automatically call our `render` function for us.
    // This always happens, you can rely on the component to render each time you change state.
    this.setState({
      style
    })
  }

  render () {
    // Grab our `style` object out of state using _destructuring_assignment_
    const { style } = this.state

    return (
      <div
        onMouseEnter={() => this.changeColour()}
        style={style}></div>
    )
  }
}
