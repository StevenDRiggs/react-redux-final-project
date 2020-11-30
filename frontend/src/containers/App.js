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
    <div className='app'>
      {user.errors
        ?
          <ul className='errors'>
            {user.errors.map((error, index) => <li key={index}>{error}</li>)}
          </ul>
        :
          null
      }
      <Router>
        <Switch>
          {user.userId
            ?
              <>
                <Redirect from='/signup' to='/' />
                <Redirect from='/login' to='/' />
                <Route path='/' component={UserDisplay} />
              </>
            :
              <>
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route exact path='/' component={Splash} />
              </>
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
