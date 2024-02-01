import { useTimer } from 'pages/Timer/hooks'
import { timeUtils } from 'utils'
import { useRestTimerEffects } from './useRestTimerEffects'

type useRestTimerProps = {
  isTimerRunning: boolean
}

export const useRestTimer = ({ isTimerRunning }: useRestTimerProps) => {
  const {
    startTimer: startRestTimer,
    stopTimer: stopRestTimer,
    time: restTime,
    setDefaultTime: setDefaultRestTime,
  } = useTimer({ defaultTime: 0 })
  //   defaultRestTimeProps
  useRestTimerEffects({ setDefaultRestTime, startRestTimer, stopRestTimer, isTimerRunning })
  const formattedRestTime = timeUtils.getFormattedTimeKorean(restTime)
  return { formattedRestTime }
}
