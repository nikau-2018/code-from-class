import React from 'react'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dogVisible: true
    }
  }

  toggleDog () {
    const dogVisible = !this.state.dogVisible
    this.setState({ dogVisible })
  }

  render () {
    return (
      <div>
        <h1>React development has not begun!</h1>
        {this.state.dogVisible
          ? <img
            src="http://www.placepuppy.net/400/250"
            onClick={() => this.toggleDog()} />
          : <a
            onClick={() => this.toggleDog()}>RETURN THE PUPPY</a>}
      </div>
    )
  }
}
