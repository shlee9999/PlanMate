import { useCallback, useRef, useState } from 'react'

type useTimerProps = {
  defaultTime: number
}

export function useTimer({ defaultTime }: useTimerProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState<number>(defaultTime)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimer = useCallback(() => {
    setIsRunning(true)
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
  }, [])

  const stopTimer = useCallback(() => {
    setIsRunning(false)
    if (!intervalRef.current) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }, [])
  //* defaultTime으로 돌아감
  const initializeTimer = useCallback(() => {
    if (intervalRef.current) return
    setTime(defaultTime)
  }, [])

  const setDefaultTime = useCallback((newDefaultTime) => {
    setTime(newDefaultTime)
  }, [])

  return { startTimer, stopTimer, initializeTimer, setDefaultTime, time, isRunning }
}

export default useTimer
