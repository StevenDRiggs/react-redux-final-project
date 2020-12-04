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
    const { user } = this.state
    return (
      <div className="signup">
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <input type='text' name='username' value={user.username} placeholder='Username' onChange={this.handleChange} />
          <input type='password' name='password' value={user.password} placeholder='Password' onChange={this.handleChange} />
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
