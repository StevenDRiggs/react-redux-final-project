const usersReducer = (state=null, action) => {
  switch (action.type) {
    case 'ADD_USER':
      document.cookie = `userId=${action.userId}; secure;`
      return action.userId

    default:
      return state
  }
}


export default usersReducer