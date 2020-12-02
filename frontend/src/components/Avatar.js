import React, { Component } from 'react'

import './Avatar.css'


class Avatar extends Component {
  componentDidMount() {

  }

  render() {
    const { avatarUrl } = this.props
    return (
      <div className='avatar'>
        {avatarUrl ? <img src={avatarUrl} alt='user avatar' id='avatar' /> : null}
      </div>
    )
  }
}


export default Avatar
