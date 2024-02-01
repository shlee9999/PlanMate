import { useEffect } from 'react'
import { timeUtils } from 'utils'
import { useTodayStats } from '../../hooks/useTodayStats'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

type UseRestTimerEffectsProps = {
  setDefaultRestTime: (time: number) => void
  stopRestTimer: () => void
  startRestTimer: () => void
}

/**
 * @param {(time:number)=>void)} setDefaultRestTime
 * @param {()=>void} stopRestTimer
 * @param {()=>void} startRestTimer
 */
export const useRestTimerEffects = ({
  setDefaultRestTime,
  startRestTimer,
  stopRestTimer,
}: UseRestTimerEffectsProps) => {
  const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const { todayStatsData, restTime: defaultRestTimeProps } = useTodayStats()
  const { isStatsLoading, totalStudyTime } = useTodayStats()

  useEffect(() => {
    setDefaultRestTime(timeUtils.timeToSecond(defaultRestTimeProps))
  }, [todayStatsData])

  useEffect(() => {
    if (isNavBlocked) stopRestTimer()
    else {
      //총 공부 시간이 0이면 breakTimer은 작동하지 않음
      startRestTimer()
    }
  }, [isNavBlocked])

  useEffect(() => {
    if (!isStatsLoading) {
      // * Todo 로딩 완료
      if (timeUtils.isEqualTime(totalStudyTime, { hour: 0, minute: 0, second: 0 })) stopRestTimer()
    }
  }, [isStatsLoading])
}
