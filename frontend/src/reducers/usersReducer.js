const usersReducer = (state={}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        userId: action.user.userId,
        avatarUrl: action.user.avatarUrl,
        username: action.user.username,
        errors: action.user.errors,
        showAllImages: false,
      }

    case 'LOGIN_USER':
      return {
        userId: action.user.userId,
        avatarUrl: action.user.avatarUrl,
        username: action.user.username,
        errors: action.user.errors,
        showAllImages: false,
      }

    case 'SET_SHOW_ALL_IMAGES':
      return {
        ...state,
        user: {
          ...state.user,
          showAllImages: action.showAllImages,
        },
      }

    default:
      return state
  }
}


export default usersReducer
