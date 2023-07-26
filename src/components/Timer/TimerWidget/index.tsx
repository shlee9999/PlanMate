import { useEffect } from 'react'
import { Mode, Root, Timer } from './styled'
import { useSelector } from 'react-redux'
import { useFormattedTime } from 'utils/helper'
import { useTimer } from 'hooks/useTimer'
import { RootState } from 'modules'

export const StudyTimerWidget = () => {
  const isRunning = useSelector((state: RootState) => state.timer.isRunning)

  const { startTimer, stopTimer, time } = useTimer({ defaultTime: 0 })
  const formattedTime: string = useFormattedTime(time)

  useEffect(() => {
    if (!isRunning) {
      stopTimer()
      return
    }
    if (isRunning) {
      startTimer()
      return
    }
  }, [isRunning])

  return (
    <Root>
      <Mode>공부</Mode>
      <Timer>{formattedTime}</Timer>
    </Root>
  )
}
