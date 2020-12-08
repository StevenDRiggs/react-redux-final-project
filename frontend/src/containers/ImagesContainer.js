import React, { Component } from 'react'
import { connect } from 'react-redux'

import Image from '../components/Image'

import './ImagesContainer.css'


class ImagesContainer extends Component {
  state = {
    centerImageId: null,
  }

  componentDidMount() {
    const { images } = this.props
    if (images.length > 0) {
      const imageIds = images.map(image => image.id)
      const lowerId = Math.min(...imageIds)
      const upperId = Math.max(...imageIds)
      let mid = Math.floor((lowerId + upperId) / 2)

      while (mid > lowerId && !imageIds.includes(mid)) {
        mid -= 1
      }

      this.setState({
        centerImageId: mid,
      })
    }
  }

  render() {
    const { images, errors } = this.props
    const { centerImageId } = this.state
    let centerImage
    let centerImageUrl
    if (centerImageId) {
      centerImage = images.find(image => image.id === centerImageId)
      centerImageUrl = centerImage.url
    }

    return (
      <div className='images-container row mt-5 d-flex'>
        {errors
          ?
            <ul className='errors'>
              {errors.map((error, index) => <li key={index}>{error}</li>)}
            </ul>
          :
            null
        }
      {centerImageId
          ?
            <>
              <div id='left-images' className='d-inline-block'>
                {images.filter(image => image.id < centerImageId).map(image => <Image key={image.id} src={image.url} />)}
              </div>
              <div id='center-image' className='d-inline-block'>
                {centerImageUrl}
                <Image src={centerImageUrl} />
              </div>
              <div id='right-images' className='d-inline-block'>
                {images.filter(image => image.id > centerImageId).map(image => <Image key={image.id} src={image.url} />)}
              </div>
            </>
          :
            null
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    images: state.images.images,
    errors: state.images.errors,
  }
}


export default connect(mapStateToProps)(ImagesContainer)
