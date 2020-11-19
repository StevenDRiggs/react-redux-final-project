import React from 'react'

import './Image.css'


const Image = props => {
  return (
    <div className='Image'>
      <img src={props.url} alt='' />
    </div>
  )
}


export default Image