import { combineReducers } from 'redux'

import imagesReducer from './imagesReducer'
import usersReducer from './usersReducer'


const rootReducer = combineReducers({
  images: imagesReducer,
  user: usersReducer,
})


export default rootReducer