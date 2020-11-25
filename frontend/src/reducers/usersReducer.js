const usersReducer = (state=null, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        userId: action.userId,
        userImagesOnly: true,
      }

    case 'LOGIN_USER':
      return {
        userId: action.userId,
        userImagesOnly: true,
      }

    default:
      return state
  }
}


export default usersReducer