import React from 'react'

const randomColour = () => `#${Math.floor(Math.random()*16777215).toString(16)}`

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
      },
      update: setInterval(this.changeColour, 1000)
    }
  }

  changeColour = () => {
    const style = {
      width,
      height,
      backgroundColor: randomColour()
    }

    this.setState({
      style
    })
  }

  render () {
    const { style } = this.state
    return (
      <div
        onMouseEnter={() => this.changeColour()}
        style={style}></div>
    )
  }
}