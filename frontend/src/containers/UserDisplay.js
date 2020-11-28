import React, { Component } from 'react'
import { connect } from 'react-redux'

import Avatar from '../components/Avatar'
import ImagesContainer from './ImagesContainer'

import './UserDisplay.css'


class UserDisplay extends Component {
  render() {
    const { user, images } = this.props
    return (
      <div className='UserDisplay'>
        <Avatar avatarUrl={user.avatarUrl} />
        <ImagesContainer images={images} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
    images: state.images,
  }
}


export default connect(mapStateToProps)(UserDisplay)