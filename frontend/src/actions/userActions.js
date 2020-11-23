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
    .then(userId => dispatch({
      type: 'ADD_USER',
      userId: userId,
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
    .then(userId => dispatch({
      type: 'LOGIN_USER',
      userId: userId,
    }))
  }
}