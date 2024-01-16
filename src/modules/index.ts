import { combineReducers } from 'redux'
import timer from './timer'
import userAuthInfo from './userAuthInfo'
import appointments from './appointments'
import selectedInfo from './selectedInfo'
const rootReducer = combineReducers({
  timer,
  userAuthInfo,
  appointments,
  selectedInfo,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
