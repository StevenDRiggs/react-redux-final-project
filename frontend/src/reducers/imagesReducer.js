const imagesReducer = (state=[], action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return action.images

    default:
      return state
  }
}


export default imagesReducer