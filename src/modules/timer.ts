const RUN_TIMER = 'timer/RUN_TIMER' as const
const PAUSE_TIMER = 'timer/PAUSE_TIMER' as const

export const runTimer = () => ({ type: RUN_TIMER })
export const pauseTimer = () => ({ type: PAUSE_TIMER })

type TimerAction = ReturnType<typeof runTimer> | ReturnType<typeof pauseTimer>

type TimerState = {
  isRunning: boolean
}

const InitialState: TimerState = {
  isRunning: false,
}

function timer(state: TimerState = InitialState, action: TimerAction) {
  switch (action.type) {
    case RUN_TIMER:
      return { isRunning: true }
    case PAUSE_TIMER:
      return { isRunning: false }
    default:
      return state
  }
}

export default timer
