import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import ImagesContainer from './ImagesContainer'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/images'>
              <ImagesContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App
