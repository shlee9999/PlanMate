import { combineReducers } from 'redux'
import todos from './todos'
import timer from './timer'
import todoplans from './todoplans'

const rootReducer = combineReducers({
  todos,
  timer,
  todoplans,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
