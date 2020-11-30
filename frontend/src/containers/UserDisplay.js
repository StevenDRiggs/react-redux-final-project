import React, { Component } from 'react'
import { connect } from 'react-redux'

import Avatar from '../components/Avatar'
import ImagesContainer from './ImagesContainer'
import { loadImages } from '../actions/imageActions'
import { setShowAllImages } from '../actions/userActions'

import './UserDisplay.css'


class UserDisplay extends Component {
  state = {
    showAllImages: this.props.user.showAllImages,
  }

  handleClick = event => {
    const { user, loadImages, setShowAllImages } = this.props
    if (event.target.checked) {
      loadImages()
      setShowAllImages(true)
    } else {
      loadImages(user.id)
      setShowAllImages(false)
    }

    this.setState({
      showAllImages: !this.state.showAllImages,
    })
  }

  render() {
    const { user } = this.props
    const { showAllImages } = this.state
    return (
      <div id='user-display'>
        <Avatar avatarUrl={user.avatarUrl} />
        <input type='checkbox' name='show-all-images' defaultChecked={showAllImages} onClick={this.handleClick} />
        <ImagesContainer />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadImages: userId => dispatch(loadImages(userId)),
    setShowAllImages: bool => dispatch(setShowAllImages(bool)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay)
