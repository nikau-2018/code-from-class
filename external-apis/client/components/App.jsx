import React from 'react'

import CorsApi from './CorsApi'
import ExternalApi from './ExternalApi'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: ''
    }
    this.goTo = this.goTo.bind(this)
  }

  goTo (destination) {
    return (e) => {
      e.preventDefault()
      this.setState({
        currentPage: destination
      })
    }
  }

  render () {
    return (
      <div>
        <h1>External APIs</h1>
        <p><a href='#' onClick={this.goTo('ext')}>External</a></p>
        <p><a href='#' onClick={this.goTo('cors')}>CORS</a></p>
        {this.state.currentPage === 'ext' && <ExternalApi />}
        {this.state.currentPage === 'cors' && <CorsApi />}
      </div>
    )
  }
}

export default App
