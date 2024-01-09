import { combineReducers } from 'redux'
import todos from './todos'
import timer from './timer'
import userAuthInfo from './userAuthInfo'
import appointments from './appointments'
import selectedInfo from './selectedInfo'
const rootReducer = combineReducers({
  todos,
  timer,
  userAuthInfo,
  appointments,
  selectedInfo,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
