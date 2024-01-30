import { combineReducers } from 'redux'
import userAuthInfo from './userAuthInfo'
import selectedInfo from './selectedInfo'
import isNavBlocked from './isNavBlocked'
const rootReducer = combineReducers({
  userAuthInfo,
  selectedInfo,
  isNavBlocked,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
