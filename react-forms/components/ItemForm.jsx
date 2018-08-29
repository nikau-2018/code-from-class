import React from 'react'

import colorList from '../color-list'

const defaultState = {
  name: '',
  description: '',
  color: 'aliceblue'
}

class ItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: {
        isRequired: 'This field cannot be empty.',
        isNotChartreuse: 'Nobody likes chartreuse.'
      },
      item: {...defaultState},
      invalid: {},
      validation: {
        name: [ 'isRequired' ],
        color: [ 'isNotChartreuse' ]
      },
      validators: {
        isRequired: val => val && val.length,
        isNotChartreuse: color => color !== 'chartreuse'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  componentWillReceiveProps ({editItem}) {
    if (editItem) {
      this.setState({item: editItem})
    }
  }

  handleChange (evt) {
    this.setState({
      item: {
        ...this.state.item,
        [evt.target.name]: evt.target.value
      }
    })
  }

  handleSubmit (evt) {
    if (this.validate()) {
      this.props.saveItem(this.state.item)
      this.resetForm()
    }
    evt.preventDefault()
  }

  resetForm (evt) {
    this.setState({
      item: {...defaultState},
      invalid: {}
    })
    evt && evt.preventDefault()
  }

  validate () {
    const invalid = {...this.state.invalid}
    for (const field in this.state.item) {
      const validators = this.state.validation[field] || []
      validators.forEach(v => {
        if (!this.state.validators[v](this.state.item[field])) {
          invalid[field] = this.state.errors[v]
        } else {
          delete invalid[field]
        }
      })
    }
    this.setState({invalid})
    return !Object.keys(invalid).length
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text'
          className='u-full-width'
          name='name'
          value={this.state.item.name}
          onChange={this.handleChange}
        />

        {this.state.invalid.name &&
          <div className='error'>{this.state.invalid.name}</div>
        }

        <label htmlFor='description'>Description</label>
        <textarea name='description' className='u-full-width'
          value={this.state.item.description}
          onChange={this.handleChange} />

        {this.state.invalid.description &&
          <div className='error'>{this.state.invalid.description}</div>}

        <label htmlFor='color'>Colour</label>
        <select name='color' className='u-full-width'
          value={this.state.item.color}
          onChange={this.handleChange}>
          {colorList.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        {this.state.invalid.color &&
          <div className='error'>{this.state.invalid.color}</div>
        }

        <input type='submit' className='button-primary'
          value={this.props.editItem ? 'Save' : 'Add'} />
        <button className='button-warning'
          onClick={this.resetForm}>Reset</button>
      </form>
    )
  }
}

export default ItemForm
