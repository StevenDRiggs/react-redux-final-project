const imagesReducer = (state={images: [], errors: []}, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return {
        ...state,
        images: action.images,
        errors: action.errors,
      }

    default:
      return state
  }
}


export default imagesReducer
