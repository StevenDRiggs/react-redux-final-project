import React, { Component } from 'react'
import { SVG } from '@svgdotjs/svg.js'

import './Avatar.css'


class Avatar extends Component {
  componentDidMount() {
  }

  render() {
    const { avatarUrl } = this.props

    if (avatarUrl) {
      const caterpillarFace = document.querySelector('svg #head-face')
      const caterpillarHead = document.querySelector('svg #head-head')

      caterpillarFace.style.display = 'none'
      caterpillarHead.style.backgroundImage = avatarUrl
      SVG(caterpillarHead).fill = 'none'

    }
    return (
      <div>
      </div>
    )
  }
}


export default Avatar
