import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import UserDisplay from './UserDisplay'
import Signup from '../forms/Signup'
import Login  from '../forms/Login'
import Splash from '../components/Splash'
import { loadImages } from '../actions/ImageActions'

import './App.css'


class App extends Component {
  componentDidMount() {
    this.props.loadImages()
  }
  
  componentDidUpdate() {
    const { user, loadImages } = this.props
    if (user && user.userId && user.userImagesOnly) {
      loadImages(user.userId)
    } else {
      loadImages()
    }
  }

  render() {
    const user = this.props.user
    return (
      <div className='App'>
        <Router>
          {user && user.errors ? <ul className='errors'>{user.errors.map((error, index) => <li key={index}>{error}</li>)}</ul> : null}
          <Switch>
            {user && user.userId ? <Route path='/' component={UserDisplay} user={user} /> : <Route exact path='/' component={Splash} />}
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadImages: () => dispatch(loadImages()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
