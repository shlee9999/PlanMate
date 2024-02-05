import { combineReducers } from 'redux'
import userAuthInfo from './userAuthInfo'
import selectedInfo from './selectedInfo'
import isNavBlocked from './isNavBlocked'
import selectedDate from './selectedDate'
const rootReducer = combineReducers({
  userAuthInfo,
  selectedInfo,
  isNavBlocked,
  selectedDate,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
