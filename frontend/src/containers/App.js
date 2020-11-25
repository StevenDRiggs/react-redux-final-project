import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import ImagesContainer from './ImagesContainer'
import Image from '../components/Image'
import Signup from '../forms/Signup'
import Login  from '../forms/Login'
import Splash from '../components/Splash'
import { loadImages } from '../actions/ImageActions'

import './App.css'


class App extends Component {
  componentDidMount() {
    this.props.loadImages()
  }

  render() {
    if (!this.props.user) {
      return (
        <Router>
          <Switch>
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route exact path='/' component={Splash} />
          </Switch>
        </Router>
      )
    } else {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route exact path='/images' component={ImagesContainer} />
              <Route path='/images/:image_id' component={Image} />
            </Switch>
          </Router>
        </div>
      )
    }
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
