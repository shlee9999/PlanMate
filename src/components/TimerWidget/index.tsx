import { useState, useRef, useEffect } from 'react'
import { Root } from './styles'
import { useSelector } from 'react-redux'
import { useFormattedTime, startTimer, stopTimer } from '../../utils/helper'
import { Globals } from 'types'

function TimerWidget({ title }: { title: string }) {
  const isRunning = useSelector((state: Globals) => state.isRunning)
  const isStudying = useSelector((state: Globals) => state.isStudying)
  const [time, setTime] = useState<number>(0)
  const intervalId = useRef<NodeJS.Timeout | null>(null)
  const formattedTime: string = useFormattedTime(time)

  useEffect(() => {
    if (!isRunning) {
      stopTimer(intervalId.current)
      return
    }
    if (title === 'Study' && isRunning && isStudying) {
      intervalId.current = startTimer(() => {
        setTime((prev) => prev + 1)
      })
      return
    }
    if (title === 'Exercise' && isRunning && !isStudying) {
      intervalId.current = startTimer(() => {
        setTime((prev) => prev + 1)
      })
      return
    }
  }, [isRunning])

  return (
    <Root>
      <p>{title}</p>
      <p>{formattedTime}</p>
    </Root>
  )
}

export default TimerWidget
