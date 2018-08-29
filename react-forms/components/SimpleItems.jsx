import React from 'react'
import {Link} from 'react-router-dom'

import * as localDb from '../localDb'
import SimpleItemForm from './SimpleItemForm'

class SimpleItems extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
    this.saveItem = this.saveItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount () {
    this.setState({
      items: localDb.getItems()
    })
  }

  saveItem (item) {
    localDb.addItem(item)
    this.setState({
      items: localDb.getItems()
    })
  }

  deleteItem (evt, id) {
    localDb.deleteItem(id)
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
    evt.preventDefault()
  }

  getItem (item) {
    const {id, name, description, color} = item
    return (
      <tr key={id} className='item' onContextMenu={(evt) => this.deleteItem(evt, id)}>
        <td className='item-name'>{name}</td>
        <td className='item-description'>{description}</td>
        <td className='item-color' style={{backgroundColor: color}}></td>
      </tr>
    )
  }

  render () {
    return (
      <div className='row'>
        <div className='two-thirds column'>
          <h1>Items</h1>
          <p>Right-click to delete. (Probably not the best UX for a production app!)</p>
          <p>This is the <strong>simple</strong> version of the component, which doesn&apos;t include editing or validation.</p>
          <p>For the more complex version, <Link to='/'>click here</Link>.</p>
          <table className='u-full-width'>
            <thead>
              <tr>
                <th className='item-name'>Name</th>
                <th className='item-description'>Description</th>
                <th className='item-color'>Colour</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(item => this.getItem(item))}
            </tbody>
          </table>
        </div>

        <div className='one-third column'>
          <h2>Add an item</h2>
          <SimpleItemForm saveItem={this.saveItem} />
          <p>Above component is <strong>&lt;SimpleItemForm /&gt;</strong>.</p>
        </div>
      </div>
    )
  }
}

export default SimpleItems
