import { useTimer, useTodayStats, useTodoList } from 'pages/Timer/hooks'
import { useEffect } from 'react'
import { timeUtils } from 'utils'

type useTotalTimerProps = {
  isTimerRunning: boolean
}

export const useTotalTimer = ({ isTimerRunning }: useTotalTimerProps) => {
  const { todoList } = useTodoList()
  const { totalStudyTime } = useTodayStats()
  const {
    setDefaultTime: setTotalTime,
    startTimer: startTotalTimer,
    stopTimer: stopTotalTimer,
    time: totalTime,
  } = useTimer({ defaultTime: 0 })

  useEffect(() => {
    setTotalTime(timeUtils.timeToSecond(totalStudyTime))
  }, [todoList])

  useEffect(() => {
    isTimerRunning ? startTotalTimer() : stopTotalTimer()
  }, [isTimerRunning])
  return { totalTime }
}
