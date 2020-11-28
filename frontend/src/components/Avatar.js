import React from 'react'

import './Avatar.css'


const Avatar = props => {
  return (
    <div className='Avatar'>
      {props.avatarUrl ? <img src={props.avatarUrl} alt='user avatar' /> : null}
    </div>
  )
}


export default Avatar