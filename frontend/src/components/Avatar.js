import React from 'react'

import './Avatar.css'


const Avatar = props => {
  return (
    <>
      {props.avatarUrl ? <img src={props.avatarUrl} alt='user avatar' id='avatar' /> : null}
    </>
  )
}


export default Avatar
