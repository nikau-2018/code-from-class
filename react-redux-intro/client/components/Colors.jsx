import React from 'react'
import {connect} from 'react-redux'

import {addColor} from '../actions'

class Colors extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newColor: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick (e) {
    const addColorAction = addColor(this.state.newColor)
    this.props.dispatch(addColorAction)
    this.setState({newColor: ''})
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        {
          this.props.colorList.map(color => {
            return <p key={color.name}>{color.name}</p>
          })
        }
        <input name='newColor' onChange={this.handleChange} value={this.state.newColor} />
        <button onClick={this.handleClick}>Add new color</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    colorList: state.colors
  }
}

export default connect(mapStateToProps)(Colors)
