import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import UserDisplay from './UserDisplay'
import Signup from '../forms/Signup'
import Login  from '../forms/Login'
import Splash from '../components/Splash'

import './App.css'


const App = props => {
  const { user } = props
  return (
    <div className='app container justify-content-center'>
      <svg id='caterpillar' className='row justify-content-center mx-auto' width="300" height="300">
        <circle id='tail3' cx="200" cy="150" r="20" fill="violet"></circle>
        <circle id='tail2' cx="180" cy="160" r="30" fill="indigo"></circle>
        <g id='tail1'>
          <line id='tail1-leg-left' x1="140" y1="157" x2="140" y2="225" stroke="black" strokeWidth="5"></line>
          <line id='tail1-leg-right' x1="160" y1="157" x2="160" y2="225" stroke="black" strokeWidth="5"></line>
          <circle id='tail1-body' cx="150" cy="157" r="40" fill="blue"></circle>
        </g>
        <g id='body3'>
          <line id='body3-leg-left' x1="115" y1="165" x2="115" y2="240" stroke="black" strokeWidth="5"></line>
          <line id='body3-leg-right' x1="130" y1="165" x2="130" y2="240" stroke="black" strokeWidth="5"></line>
          <circle id='body3-body' cx="120" cy="165" r="50" fill="green"></circle>
        </g>
        <g id='body2'>
          <line id='body2-leg-left' x1="90" y1="155" x2="90" y2="230" stroke="black" strokeWidth="5"></line>
          <line id='body2-leg-right' x1="110" y1="155" x2="110" y2="230" stroke="black" strokeWidth="5"></line>
          <circle id='body2-body' cx="100" cy="155" r="50" fill="yellow"></circle>
        </g>
        <g id='body1'>
          <line id='body1-leg-left' x1="60" y1="160" x2="60" y2="235" stroke="black" strokeWidth="5"></line>
          <line id='body1-leg-right' x1="80" y1="160" x2="80" y2="235" stroke="black" strokeWidth="5"></line>
          <circle id='body1-body' cx="70" cy="160" r="50" fill="orange"></circle>
        </g>
        <g id='head'>
          <g id='head-antennae'>
            <g id='head-antennae-left'>
              <path id='head-antennae-left-stamen' stroke="black" strokeWidth="5" fill="none" d="M 40,115 C 50,100 50,100 30,80"></path>
              <circle id='head-antennae-left-pistil' cx="30" cy="80" r="10" stroke="black" strokeWidth="5" fill="gray"></circle>
            </g>
            <g id='head-antennae-right'>
              <path id='head-antennae-right-stamen' stroke="black" strokeWidth="5" fill="none" d="M 60,115 C 50,100 50,100 60,80"></path>
              <circle id='head-antennae-right-pistil' cx="60" cy="80" r="10" stroke="black" strokeWidth="5" fill="gray"></circle>
            </g>
          </g>
          <circle id='head-head' cx="50" cy="150" r="50" fill="red"></circle>
          <g id='head-face'>
            <g id='head-face-eyes'>
              <circle id='head-face-eyes-left' cx="30" cy="140" r="10" fill="white"></circle>
              <circle id='head-face-eyes-right' cx="70" cy="140" r="10" fill="white"></circle>
            </g>
            <path id='head-face-mouth' stroke="white" strokeWidth="10" fill="none" d="M 30,160 C 40,180 60,180 70,160"></path>
          </g>
        </g>
      </svg>

      {user.errors
        ?
          <ul className='errors row'>
            {user.errors.map((error, index) => <li key={index}>{error}</li>)}
          </ul>
        :
          null
      }
      <Router>
        <Switch>
          {user.userId
            ?
              <div className='row justify-content-center'>
                <Redirect from='/signup' to='/' />
                <Redirect from='/login' to='/' />
                <Route path='/' component={UserDisplay} />
              </div>
            :
              <div className='row justify-content-center'>
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route exact path='/' component={Splash} />
              </div>
          }
        </Switch>
      </Router>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(App)
