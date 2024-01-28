import { approveNav, blockNav } from 'modules/isNavBlocked'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

type useTimerProps = {
  defaultTime: number
}

export function useTimer({ defaultTime }: useTimerProps) {
  const dispatch = useDispatch()
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState<number>(defaultTime)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimer = (): void => {
    setIsRunning(true)
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
  }

  const stopTimer = (): void => {
    setIsRunning(false)
    if (!intervalRef.current) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
  //* defaultTime으로 돌아감
  const initializeTimer = (): void => {
    if (intervalRef.current) return
    setTime(defaultTime)
  }

  const setDefaultTime = (newDefaultTime): void => {
    setTime(newDefaultTime)
  }

  useEffect(() => {
    isRunning ? dispatch(approveNav()) : dispatch(blockNav())
  }, [isRunning])

  return { startTimer, stopTimer, initializeTimer, setDefaultTime, time, isRunning }
}

export default useTimer
