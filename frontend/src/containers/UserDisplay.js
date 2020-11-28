import React, { Component } from 'react'
import { connect } from 'react-redux'

import Avatar from '../components/Avatar'

import './UserDisplay.css'


class UserDisplay extends Component {
  render() {
    return (
      <div className='UserDisplay'>
        <Avatar avatarUrl={this.props.user.avatarUrl} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(UserDisplay)