import React, { Component } from 'react'
import { connect } from 'react-redux'

import Avatar from '../components/Avatar'
import ImagesContainer from './ImagesContainer'
import { loadImages } from '../actions/imageActions'
import { setShowAllImages } from '../actions/userActions'
import AddImageForm from '../forms/AddImageForm'

import './UserDisplay.css'


class UserDisplay extends Component {
  state = {
    showAllImages: this.props.user.showAllImages,
    showAddImageForm: false,
  }

  handleCheckboxToggle = event => {
    const { user, loadImages, setShowAllImages } = this.props
    if (event.target.checked) {
      loadImages()
      setShowAllImages(true)
    } else {
      loadImages(user.userId)
      setShowAllImages(false)
    }

    this.setState({
      ...this.state,
      showAllImages: !this.state.showAllImages,
    })
  }

  handleButtonClick = event => {
    event.preventDefault()
    this.setState({
      ...this.state,
      showAddImageForm: !this.state.showAddImageForm,
    })
  }

  componentDidMount() {
    const { user, loadImages } = this.props
    loadImages(user.userId)
  }

  render() {
    const { user } = this.props
    const { showAllImages, showAddImageForm } = this.state
    return (
      <div id='user-display'>
        <Avatar avatarUrl={user.avatarUrl} />
        {showAddImageForm
          ?
            <AddImageForm exit={this.handleButtonClick} userId={user.userId} />
          :
            <button name='add-image' onClick={this.handleButtonClick}>Add Image</button>
        }
        <label htmlFor='show-all-images'>Show all images</label>
        <input type='checkbox' name='show-all-images' id='show-all-images' defaultChecked={showAllImages} onClick={this.handleCheckboxToggle} />
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
