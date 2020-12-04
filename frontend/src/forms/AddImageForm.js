import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addImage } from '../actions/imageActions'


const initialState = {
  imageUrl: '',
}


class AddImageForm extends Component {
  state = {
    ...initialState,
    userId: this.props.userId,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addImage(this.state)
    this.setState({
      ...initialState,
      userId: this.props.userId,
    })
  }

  render() {
    const { exit } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='imageUrl' onChange={this.handleChange} value={this.state.imageUrl} placeholder='Image URL' />
        <button type='submit'>Submit</button>
        <button type='button' name='form-exit' onClick={exit}>X</button>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addImage: attrs => dispatch(addImage(attrs))
  }
}


export default connect(null, mapDispatchToProps)(AddImageForm)