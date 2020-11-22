import DATABASE_URL from '../DATABASE_URL'


export const loadImages = () => {
  return dispatch => {
    fetch(`${DATABASE_URL}/images`)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'SET_IMAGES',
      images: json,
    }))
  }
}