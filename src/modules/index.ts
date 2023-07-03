import { combineReducers } from 'redux'
import todos from './todos'
import mode from './mode'
import tab from './tab'
import timer from './timer'

const rootReducer = combineReducers({
  todos,
  mode,
  tab,
  timer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
