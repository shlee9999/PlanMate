import { useEffect } from 'react'
import { Mode, Root, Timer } from './styled'
import { useSelector } from 'react-redux'
import { useFormattedTime } from 'utils/helper'
import { Globals } from 'types'
import { useTimer } from 'hooks/useTimer'

function TimerWidget({ title }: { title: string }) {
  const isRunning = useSelector((state: Globals) => state.isRunning)
  const isStudying = useSelector((state: Globals) => state.isStudying)

  const { startTimer, stopTimer, time } = useTimer({ defaultTime: 0 })
  const formattedTime: string = useFormattedTime(time)

  useEffect(() => {
    if (!isRunning) {
      stopTimer()
      return
    }
    if (title === 'study' && isRunning && isStudying) {
      startTimer()
      return
    }
    if (title === 'exercise' && isRunning && !isStudying) {
      startTimer
      return
    }
  }, [isRunning])

  return (
    <Root>
      <Mode>{title === 'study' ? '공부' : '운동'}</Mode>
      <Timer>{formattedTime}</Timer>
    </Root>
  )
}

export default TimerWidget
