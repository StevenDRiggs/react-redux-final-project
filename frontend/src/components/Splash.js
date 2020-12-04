import React from 'react'
import {
  NavLink,
} from 'react-router-dom'


const Splash = () => {
  return (
    <div className='splash container'>
      <h1 className='row justify-content-center'>Welcome to the Calapitter Image Library!</h1>

      <div className='container row justify-content-center'>
        <NavLink to='/signup'><button>Sign Up</button></NavLink>
        <NavLink to='/login'><button>Log In</button></NavLink>
      </div>
    </div>
  )
}


export default Splash
