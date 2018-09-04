import React from 'react'
import request from 'superagent'

class ExternalApi extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  componentDidMount () {
    this.getImage()
  }

  getImage () {
    request
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        this.setState({
          url: res.body.url
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div className='external-api'>
        <h1>APOD</h1>
        {this.state.url && <img src={this.state.url} />}
      </div>
    )
  }
}

export default ExternalApi
