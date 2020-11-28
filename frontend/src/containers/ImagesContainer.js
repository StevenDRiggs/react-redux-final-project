import React, { Component } from 'react'
import { connect } from 'react-redux'

import Image from '../components/Image'

import './ImagesContainer.css'


class ImagesContainer extends Component {
  render() {
    return (
      <div className="ImagesContainer">
        {this.props.images.map(image => <Image key={image.id} src={image.url} />)}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    images: state.images,
    user: state.user,
  }
}


export default connect(mapStateToProps)(ImagesContainer)
