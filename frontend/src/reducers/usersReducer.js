const usersReducer = (state=null, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return action.userId

    case 'LOGIN_USER':
      return action.userId

    default:
      return state
  }
}


export default usersReducer