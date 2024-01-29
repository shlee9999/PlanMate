import { useState, useEffect } from 'react'
import { timeUtils } from 'utils'

type useCurrentTimeProps = {
  callback: () => void
}

export const useCurrentTime = ({ callback }: useCurrentTimeProps) => {
  const getCurrentTime = () => new Date()

  const [currentTime, setCurrentTime] = useState(getCurrentTime())

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getCurrentTime()
      setCurrentTime(newTime)
      const { hour, minute, second } = timeUtils.getTimeProps(newTime)
      // 매시 30분 정각에 callback 함수를 실행합니다.
      if (minute === 30 && second === 0) callback()
    }, 1000)

    return () => clearInterval(interval)
  }, [callback])

  return { currentTime: timeUtils.getTimeProps(currentTime) }
}
