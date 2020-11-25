import React, { Component } from 'react'
import { connect } from 'react-redux'

import Image from '../components/Image'

import './ImagesContainer.css'


class ImagesContainer extends Component {
  state = {
    images: this.props.images,
  }

  componentDidMount() {
    if (this.props.user.userImagesOnly) {
      this.setState({
        images: this.props.images.filter(image => image.userIds.includes(this.props.user.userId)),
      })
    }
  }

  render() {
    return (
      <div className="ImagesContainer">
        {this.state.images.map(image => <Image key={image.id} src={image.url} />)}
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
