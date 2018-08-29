import React from 'react'
import {Link} from 'react-router-dom'

import * as localDb from '../localDb'
import ItemForm from './ItemForm'

class Items extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      editItem: null
    }
    this.saveItem = this.saveItem.bind(this)
  }

  componentDidMount () {
    this.setState({
      items: localDb.getItems()
    })
  }

  editItem (id) {
    this.setState({
      editItem: {...this.state.items.find(item => item.id === id)}
    })
  }

  deleteItem (id, evt) {
    evt.preventDefault()

    localDb.deleteItem(id)
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
  }

  getItem (item) {
    const {id, name, description, color} = item
    const editItem = this.editItem.bind(this, id)
    const deleteItem = this.deleteItem.bind(this, id)
    return (
      <tr key={id} className='item'
        onClick={editItem} onContextMenu={deleteItem}>
        <td className='item-name'>{name}</td>
        <td className='item-description'>{description}</td>
        <td className='item-color' style={{backgroundColor: color}}></td>
      </tr>
    )
  }

  saveItem (item) {
    if (this.state.editItem) {
      localDb.saveItem(item)
      this.setState({
        items: this.state.items.map(i => i.id === item.id ? item : i),
        editItem: null
      })
    } else {
      localDb.addItem(item)
      this.setState({
        items: localDb.getItems()
      })
    }
  }

  render () {
    return (
      <div className='row'>
        <div className='two-thirds column'>
          <h1>Items</h1>
          <p>Left-click to edit, right-click to delete. (Probably not the best UX for a production app!)</p>
          <p>This is the more <strong>complex</strong> version of the component, which includes editing and validation.</p>
          <p>For the simple version, <Link to='/simple'>click here</Link>.</p>
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
          <h2>{this.state.editItem ? 'Edit' : 'Add an'} item</h2>
          <ItemForm
            editItem={this.state.editItem}
            saveItem={this.saveItem} />

          <p>Above component is <strong>&lt;ItemForm /&gt;</strong>.</p>
        </div>
      </div>
    )
  }
}

export default Items
