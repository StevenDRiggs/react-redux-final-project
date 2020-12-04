import React from 'react'
import { connect } from 'react-redux'

import './Image.css'


const Image = props => {
  let imageSrc = props.src
  if (!imageSrc) {
    const imageId = parseInt(props.match.params.image_id)
    const imageIds = props.images.map(image => image.id)

    if (!imageIds.includes(imageId)) {
      return (
        <h3>Image not found</h3>
      )
    } else {
      imageSrc = props.images.find(image => image.id === imageId).url
    }
  }    

  return (
    <div className='Image'>
      <img src={imageSrc} alt='' />
    </div>
  )
}


const mapStateToProps = state => {
  return {
    images: state.images,
  }
}


export default connect(mapStateToProps)(Image)