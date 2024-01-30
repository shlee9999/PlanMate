import { ResponseStats } from 'api/types'
import { useEffect } from 'react'
import { TimeProps } from 'types'
import { timeUtils } from 'utils'

type UseTimerEffectsProps = {
  restTime: TimeProps
  totalStudyTime: TimeProps
  setDefaultBreakTime: (time: number) => void
  setTotalTime: (time: number) => void
  isTodoLoading: boolean
  stopBreakTimer: () => void
  startBreakTimer: () => void
  isTotalTimerRunning: boolean
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
 * @param {boolean} isTotalTimerRunning
 */
export const useTimerEffects = ({
  restTime,
  totalStudyTime,
  setDefaultBreakTime,
  setTotalTime,
  isTodoLoading,
  startBreakTimer,
  stopBreakTimer,
  isTotalTimerRunning,
  todayStatsData,
}: UseTimerEffectsProps) => {
  useEffect(() => {
    const newBreakTime = timeUtils.timeToSecond(restTime)
    setDefaultBreakTime(newBreakTime)
    setTotalTime(timeUtils.timeToSecond(totalStudyTime))
  }, [todayStatsData])
  useEffect(() => {
    if (!isTodoLoading) {
      // * Todo 로딩 완료
      if (timeUtils.isEqualTime(totalStudyTime, { hour: 0, minute: 0, second: 0 })) stopBreakTimer()
    }
  }, [isTodoLoading])
  useEffect(() => {
    if (isTotalTimerRunning) stopBreakTimer()
    else {
      //총 공부 시간이 0이면 breakTimer은 작동하지 않음
      startBreakTimer()
    }
  }, [isTotalTimerRunning])
}
