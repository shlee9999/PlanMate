import { RootState } from 'modules'
import { useTimer, useTodayStats, useTodoList } from 'pages/Timer/hooks'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { timeUtils } from 'utils'

export const useTotalTimer = () => {
  const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const { isTodoLoading } = useTodoList()
  const { totalStudyTime } = useTodayStats()
  const {
    setDefaultTime: setDefaultTotalTime,
    startTimer: startTotalTimer,
    stopTimer: stopTotalTimer,
    time: totalTime,
  } = useTimer({ defaultTime: 0 })
  console.log(totalTime)
  useEffect(() => {
    setDefaultTotalTime(timeUtils.timeToSecond(totalStudyTime))
  }, [isTodoLoading])

  useEffect(() => {
    isNavBlocked ? startTotalTimer() : stopTotalTimer()
  }, [isNavBlocked])
  return { totalTime }
}
