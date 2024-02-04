import { RootState } from 'modules'
import { useTimer, useTodayStats } from 'pages/Timer/hooks'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { timeUtils } from 'utils'

export const useTotalTimer = () => {
  const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const { totalStudyTime, todayStatsData } = useTodayStats()
  const {
    setDefaultTime: setDefaultTotalTime,
    startTimer: startTotalTimer,
    stopTimer: stopTotalTimer,
    time: totalTime,
  } = useTimer({ defaultTime: 0 })

  useEffect(() => {
    setDefaultTotalTime(timeUtils.timeToSecond(totalStudyTime))
  }, [todayStatsData])

  useEffect(() => {
    isNavBlocked ? startTotalTimer() : stopTotalTimer()
  }, [isNavBlocked])
  return { totalTime }
}
