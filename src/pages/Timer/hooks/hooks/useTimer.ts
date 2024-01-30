import { useRef, useState } from 'react'

type useTimerProps = {
  defaultTime: number
}

export function useTimer({ defaultTime }: useTimerProps) {
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

  return { startTimer, stopTimer, initializeTimer, setDefaultTime, time, isRunning }
}

export default useTimer
