import { useTimer } from 'pages/Timer/hooks'
import { timeUtils } from 'utils'
import { useRestTimerEffects } from './useRestTimerEffects'

export const useRestTimer = () => {
  const {
    startTimer: startRestTimer,
    stopTimer: stopRestTimer,
    time: restTime,
    setDefaultTime: setDefaultRestTime,
  } = useTimer({ defaultTime: 0 })
  //   defaultRestTimeProps
  useRestTimerEffects({ setDefaultRestTime, startRestTimer, stopRestTimer })
  const formattedRestTime = timeUtils.getFormattedTimeKorean(restTime)
  return { formattedRestTime }
}
