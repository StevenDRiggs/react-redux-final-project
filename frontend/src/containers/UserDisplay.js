import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SVG } from '@svgdotjs/svg.js'

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

    const caterpillar = document.querySelector('svg#caterpillar')
    const caterpillarSVG = SVG(caterpillar)
    const caterpillarHead = SVG(document.querySelector('svg #head-head'))
    const caterpillarFace = SVG(document.querySelector('svg #head-face'))

    caterpillarSVG.animate(250, 500, 'now')
      .transform({
        scale: 1.1,
      })
      .animate(200, 2000, 'now')
      .transform({
        scale: 0.4,
        translate: [-100, -175],
      })

    caterpillarFace.animate(450, 2500, 'now')
      .attr('opacity', 0)

    caterpillarHead.animate(450, 2500, 'now')
      .attr('opacity', 0)

    const moveCaterpillar = () => {
      caterpillar.style.position = 'fixed'
      caterpillar.style.left = "0"
      caterpillar.style.top = "0"
    }

    setTimeout(moveCaterpillar, 2950)
  }

  render() {
    const { user } = this.props
    const { showAllImages, showAddImageForm } = this.state
    return (
      <div id='user-display'>
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
