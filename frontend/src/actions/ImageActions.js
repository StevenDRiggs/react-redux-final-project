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