import { ResponseStats } from 'api/types'
import { useEffect } from 'react'
import { TimeProps } from 'types'
import { timeUtils } from 'utils'

type UseTimerEffectsProps = {
  restTime: TimeProps
  setDefaultBreakTime: (time: number) => void
  stopBreakTimer: () => void
  startBreakTimer: () => void
  isTimerRunning: boolean
  todayStatsData: ResponseStats
}

/**
 * @param {TimeProps} restTime
 * @param {TimeProps} totalStudyTime
 * @param {(time:number)=>void)} setDefaultBreakTime
 * @param {(time:number)=>void)} setTotalTime
 * @param {boolean} isTodoLoading
 * @param {()=>void} stopBreakTimer
 * @param {()=>void} startBreakTimer
 * @param {boolean} isTimerRunning
 */
export const useTimerEffects = ({
  restTime,
  setDefaultBreakTime,
  startBreakTimer,
  stopBreakTimer,
  isTimerRunning,
  todayStatsData,
}: UseTimerEffectsProps) => {
  useEffect(() => {
    const newBreakTime = timeUtils.timeToSecond(restTime)
    setDefaultBreakTime(newBreakTime)
  }, [todayStatsData])

  useEffect(() => {
    if (isTimerRunning) stopBreakTimer()
    else {
      //총 공부 시간이 0이면 breakTimer은 작동하지 않음
      startBreakTimer()
    }
  }, [isTimerRunning])
}
