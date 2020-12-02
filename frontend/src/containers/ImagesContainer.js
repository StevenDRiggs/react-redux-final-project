import React from 'react'
import { connect } from 'react-redux'

import Image from '../components/Image'

import './ImagesContainer.css'


const ImagesContainer = props => {
  const { images, errors } = props
  return (
    <div className="ImagesContainer">
      {errors
        ?
          <ul className='errors'>
            {errors.map((error, index) => <li key={index}>{error}</li>)}
          </ul>
        :
          null
      }
      {images
        ?
          images.map(image => <Image key={image.id} src={image.url} />)
        :
          null
      }
    </div>
  )
}


const mapStateToProps = state => {
  return {
    images: state.images.images,
    errors: state.images.errors,
  }
}


export default connect(mapStateToProps)(ImagesContainer)
