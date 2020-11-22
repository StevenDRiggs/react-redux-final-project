import { combineReducers } from 'redux'

import imagesReducer from './imagesReducer'


const rootReducer = combineReducers({
  images: imagesReducer,
})


export default rootReducer