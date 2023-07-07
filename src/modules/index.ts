import { combineReducers } from 'redux'
import todos from './todos'
import mode from './mode'
import timer from './timer'

const rootReducer = combineReducers({
  todos,
  mode,
  timer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
