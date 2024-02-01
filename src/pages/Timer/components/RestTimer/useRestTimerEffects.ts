import { useEffect } from 'react'
import { timeUtils } from 'utils'
import { useTodayStats } from '../../hooks/useTodayStats'

type UseRestTimerEffectsProps = {
  setDefaultRestTime: (time: number) => void
  stopRestTimer: () => void
  startRestTimer: () => void
  isTimerRunning: boolean
}

/**
 * @param {TimeProps} restTime
 * @param {TimeProps} totalStudyTime
 * @param {(time:number)=>void)} setDefaultRestTime
 * @param {(time:number)=>void)} setTotalTime
 * @param {boolean} isTodoLoading
 * @param {()=>void} stopRestTimer
 * @param {()=>void} startRestTimer
 * @param {boolean} isTimerRunning
 */
export const useRestTimerEffects = ({
  setDefaultRestTime,
  startRestTimer,
  stopRestTimer,
  isTimerRunning,
}: UseRestTimerEffectsProps) => {
  const { todayStatsData, restTime: defaultRestTimeProps } = useTodayStats()
  const { isStatsLoading, totalStudyTime } = useTodayStats()

  useEffect(() => {
    setDefaultRestTime(timeUtils.timeToSecond(defaultRestTimeProps))
  }, [todayStatsData])

  useEffect(() => {
    if (isTimerRunning) stopRestTimer()
    else {
      //총 공부 시간이 0이면 breakTimer은 작동하지 않음
      startRestTimer()
    }
  }, [isTimerRunning])

  useEffect(() => {
    if (!isStatsLoading) {
      // * Todo 로딩 완료
      if (timeUtils.isEqualTime(totalStudyTime, { hour: 0, minute: 0, second: 0 })) stopRestTimer()
    }
  }, [isStatsLoading])
}
