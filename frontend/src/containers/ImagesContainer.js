import React, { Component } from 'react'
import { connect } from 'react-redux'

import Image from '../components/Image'

import './ImagesContainer.css'


class ImagesContainer extends Component {
  state = {
    centerImageId: null,
    centerImageUrl: null,
  }

  setCenterImageState = (state, props) => {
    const { images } = props
    const imagesIds = images.map(image => image.id)
    const lowerId = Math.min(...imagesIds)
    const upperId = Math.min(...imagesIds)
    let mid = Math.floor((lowerId + upperId) / 2)

    while (mid > lowerId && !imagesIds.includes(mid)) {
      mid -= 1
    }

    const centerImage = images.find(image => image.id === mid)

    if (centerImage) {
      const centerImageUrl = centerImage.url

      return {
        centerImageId: mid,
        centerImageUrl: centerImageUrl,
      }
    } else {
      return null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images !== this.props.images) {
      this.setState(this.setCenterImageState)
    }
  }

  render() {
    const { images, errors } = this.props
    const { centerImageId, centerImageUrl } = this.state

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
        {centerImageUrl
            ?
              <>
              <div id='left-images' className='d-inline-block'>
                {images.filter(image => image.id < centerImageId).map(image => <Image key={image.id} src={image.url} />)}
              </div>
              <div id='center-image' className='d-inline-block'>
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
