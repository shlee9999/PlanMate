import { combineReducers } from 'redux'
import todos from './todos'
import timer from './timer'
import todoplans from './todoplans'
import userAuthInfo from './userAuthInfo'
const rootReducer = combineReducers({
  todos,
  timer,
  todoplans,
  userAuthInfo,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
