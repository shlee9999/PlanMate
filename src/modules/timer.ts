const RUN_TIMER = 'timer/RUN_TIMER' as const
const STOP_TIMER = 'timer/STOP_TIMER' as const

const runTimer = () => ({ type: RUN_TIMER })
const stopTimer = () => ({ type: STOP_TIMER })

type TimerAction = ReturnType<typeof runTimer> | ReturnType<typeof stopTimer>

type TimerState = {
  isRunning: boolean
}

const InitialState: TimerState = {
  isRunning: false,
}

function Timer(state: TimerState = InitialState, action: TimerAction) {
  switch (action.type) {
    case RUN_TIMER:
      return { isRunning: true }
    case STOP_TIMER:
      return { isRunning: false }
  }
}

export default Timer
