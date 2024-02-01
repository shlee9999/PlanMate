import { useTimer, useTodayStats, useTodoList } from 'pages/Timer/hooks'
import { useEffect } from 'react'
import { timeUtils } from 'utils'

type useTotalTimerProps = {
  stopBreakTimer: () => void
  isTimerRunning: boolean
}

export const useTotalTimer = ({ stopBreakTimer, isTimerRunning }: useTotalTimerProps) => {
  const {
    setDefaultTime: setTotalTime,
    startTimer: startTotalTimer,
    stopTimer: stopTotalTimer,
    time: totalTime,
  } = useTimer({ defaultTime: 0 })
  const { todoList } = useTodoList()
  const { totalStudyTime, isStatsLoading } = useTodayStats()
  useEffect(() => {
    if (!isStatsLoading) {
      // * Todo 로딩 완료
      if (timeUtils.isEqualTime(totalStudyTime, { hour: 0, minute: 0, second: 0 })) stopBreakTimer()
    }
  }, [isStatsLoading])
  useEffect(() => {
    setTotalTime(timeUtils.timeToSecond(totalStudyTime))
  }, [todoList])
  useEffect(() => {
    isTimerRunning ? startTotalTimer() : stopTotalTimer()
  }, [isTimerRunning])
  return { totalTime }
}
