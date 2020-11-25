import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../actions/userActions'

import './Login.css'


const initialState = {
  user: {
    username: '',
    password: '',
  }
}


class Login extends Component {
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
    this.props.loginUser(this.state)
    this.setState({
      ...initialState,
    })
  }

  render() {
    return (
      <div className="Login">
        <form className='login-form' onSubmit={this.handleSubmit}>
          <input type='text' name='username' value={this.state.user.username} onChange={this.handleChange} />
          <input type='password' name='password' value={this.state.user.password} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user)),
  }
}


export default connect(null, mapDispatchToProps)(Login)
