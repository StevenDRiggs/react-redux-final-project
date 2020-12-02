import React, { Component } from 'react'

import './Avatar.css'


class Avatar extends Component {
  render() {
    return (
      <div className='avatar'>
        {props.avatarUrl ? <img src={props.avatarUrl} alt='user avatar' id='avatar' /> : null}
      </div>
    )
  }
}


export default Avatar
