import { combineReducers } from 'redux'
import todos from './todos'
import timer from './timer'
import todoplans from './todoplans'
import userAuthInfo from './userAuthInfo'
import appointments from './appointments'
const rootReducer = combineReducers({
  todos,
  timer,
  todoplans,
  userAuthInfo,
  appointments,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
