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
import { loadImages } from '../actions/ImageActions'

import './App.css'


class App extends Component {
  componentDidMount() {
    this.props.loadImages()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/images' component={ImagesContainer} />
            <Route path='/images/:image_id' component={Image} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loadImages: () => dispatch(loadImages()),
  }
}


export default connect(null, mapDispatchToProps)(App)
