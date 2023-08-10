const RUN_TIMER = 'timer/RUN_TIMER' as const
const PAUSE_TIMER = 'timer/PAUSE_TIMER' as const
const INCREASE_TIMER = 'timer/INCREASE_TIMER' as const
const INITIALIZE_TIMER = 'timer/INITIALIZE_TIMER' as const

export const runTimer = () => ({ type: RUN_TIMER })
export const pauseTimer = () => ({ type: PAUSE_TIMER })
export const increaseTimer = () => ({ type: INCREASE_TIMER })
export const initializeTimer = (totalTime: number) => ({ type: INITIALIZE_TIMER, payload: totalTime })

type TimerAction =
  | ReturnType<typeof runTimer>
  | ReturnType<typeof pauseTimer>
  | ReturnType<typeof increaseTimer>
  | ReturnType<typeof initializeTimer>

type TimerState = {
  isRunning: boolean
  totalTime: number
}

const InitialState: TimerState = {
  isRunning: false,
  totalTime: 0,
}

function timer(state: TimerState = InitialState, action: TimerAction) {
  switch (action.type) {
    case RUN_TIMER:
      return { ...state, isRunning: true }
    case PAUSE_TIMER:
      return { ...state, isRunning: false }
    case INITIALIZE_TIMER:
      return { ...state, totalTime: action.payload }
    case INCREASE_TIMER:
      return { ...state, totalTime: state.totalTime + 1 }
    default:
      return state
  }
}

export default timer
