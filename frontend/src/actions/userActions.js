import DATABASE_URL from '../DATABASE_URL'


export const addUser = signupFormInfo => {
  return dispatch => {
    fetch(`${DATABASE_URL}/users`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupFormInfo)
    })
    .then(response => response.json())
    .then(user => dispatch({
      type: 'ADD_USER',
      user,
    }))
  }
}

export const loginUser = loginFormInfo => {
  return dispatch => {
    fetch(`${DATABASE_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginFormInfo)
    })
    .then(response => response.json())
    .then(json => {
      return json
    })
    .then(user => dispatch({
      type: 'LOGIN_USER',
      user,
    }))
  }
}

export const setShowAllImages = bool => {
  return dispatch => {
    return {
      type: 'SET_SHOW_ALL_IMAGES',
      showAllImages: bool,
    }
  }
}
