import { useRef, useState } from 'react'

type useTimerProps = {
  defaultTime: number
}

export const useTimer = ({ defaultTime }: useTimerProps) => {
  const [time, setTime] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = (): void => {
    console.log(intervalRef.current)
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
  }

  const stopTimer = (): void => {
    console.log(intervalRef.current)
    if (!intervalRef.current) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const initializeTimer = (): void => {
    if (intervalRef.current) return
    setTime(defaultTime)
  }

  return { startTimer, stopTimer, initializeTimer, time }
}
