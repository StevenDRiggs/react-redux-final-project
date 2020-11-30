import React from 'react'
import { connect } from 'react-redux'

import Image from '../components/Image'

import './ImagesContainer.css'


const ImagesContainer = props => {
  return (
    <div className="ImagesContainer">
      {props.images.map(image => <Image key={image.id} src={image.url} />)}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    images: state.images,
  }
}


export default connect(mapStateToProps)(ImagesContainer)
