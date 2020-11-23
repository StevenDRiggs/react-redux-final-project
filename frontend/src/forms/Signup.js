import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addUser } from '../actions/userActions'

import './Signup.css'


const initialState = {
  user: {
    username: '',
    password: '',
  }
}


class Signup extends Component {
  state = {
    ...initialState,
  }

  handleChange = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addUser(this.state)
    this.setState({
      ...initialState,
    })
  }

  render() {
    return (
      <div className="Signup">
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user)),
  }
}


export default connect(null, mapDispatchToProps)(Signup)
