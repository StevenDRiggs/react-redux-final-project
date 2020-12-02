import DATABASE_URL from '../DATABASE_URL'


export const loadImages = userId => {
  return dispatch => {
    if (userId) {
      fetch(`${DATABASE_URL}/users/${userId}/images`)
      .then(response => response.json())
      .then(imagesArr => dispatch({
        type: 'SET_IMAGES',
        images: imagesArr,
      }))
    } else {
      fetch(`${DATABASE_URL}/images`)
      .then(response => response.json())
      .then(imagesArr => dispatch({
        type: 'SET_IMAGES',
        images: imagesArr,
      }))
    }
  }
}

export const addImage = attrs => {
  return dispatch => {
    fetch(`${DATABASE_URL}/images`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: attrs.imageUrl,
        user_id: attrs.userId,
      })
    })
    .then(response => response.json())
    .then(json => dispatch({
      type: 'SET_IMAGES',
      images: json.images,
      errors: json.errors,
    }))
  }
}