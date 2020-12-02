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
      <svg className='row justify-content-center mx-auto' width="300" height="300">
        <circle cx="200" cy="150" r="20" fill="violet"></circle>
        <circle cx="180" cy="160" r="30" fill="indigo"></circle>
          <line x1="140" y1="157" x2="140" y2="225" stroke="black" strokeWidth="5"></line>
          <line x1="160" y1="157" x2="160" y2="225" stroke="black" strokeWidth="5"></line>
        <circle cx="150" cy="157" r="40" fill="blue"></circle>
          <line x1="115" y1="165" x2="115" y2="240" stroke="black" strokeWidth="5"></line>
          <line x1="130" y1="165" x2="130" y2="240" stroke="black" strokeWidth="5"></line>
        <circle cx="120" cy="165" r="50" fill="green"></circle>
          <line x1="90" y1="155" x2="90" y2="230" stroke="black" strokeWidth="5"></line>
          <line x1="110" y1="155" x2="110" y2="230" stroke="black" strokeWidth="5"></line>
        <circle cx="100" cy="155" r="50" fill="yellow"></circle>
          <line x1="60" y1="160" x2="60" y2="235" stroke="black" strokeWidth="5"></line>
          <line x1="80" y1="160" x2="80" y2="235" stroke="black" strokeWidth="5"></line>
        <circle cx="70" cy="160" r="50" fill="orange"></circle>
          <path stroke="black" strokeWidth="5" fill="none" d="M 40,115 C 50,100 50,100 30,80"></path>
          <path stroke="black" strokeWidth="5" fill="none" d="M 60,115 C 50,100 50,100 60,80"></path>
            <circle cx="30" cy="80" r="10" stroke="black" strokeWidth="5" fill="gray"></circle>
            <circle cx="60" cy="80" r="10" stroke="black" strokeWidth="5" fill="gray"></circle>
        <circle cx="50" cy="150" r="50" fill="red"></circle>
          <circle cx="30" cy="140" r="10" fill="white"></circle>
          <circle cx="70" cy="140" r="10" fill="white"></circle>
          <path stroke="white" strokeWidth="10" fill="none" d="M 30,160 C 40,180 60,180 70,160"></path>
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
