import { useUpdateSubjectMutation } from 'pages/Timer/hooks/mutations'
import { useState, useEffect } from 'react'
import { timeUtils } from 'utils'

type useCurrentTimeProps = {
  isTodoTimerRunning: boolean
  startTime: string
  subjectId: number
}

/**
 * 매시 5분에 callback 함수 실행
 */
export const useCurrentTime = ({ isTodoTimerRunning, startTime, subjectId }: useCurrentTimeProps) => {
  const getCurrentTime = () => new Date()
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  const mutateUpdateSubject = useUpdateSubjectMutation()
  useEffect(() => {
    if (!isTodoTimerRunning) return
    const interval = setInterval(() => {
      const newTime = getCurrentTime()
      setCurrentTime(newTime)
      const { minute } = timeUtils.getTimeProps(newTime)
      if (minute % 5 === 0)
        mutateUpdateSubject({
          endAt: timeUtils.getCurrentTime(),
          startAt: startTime,
          subjectId,
        })
    }, 1000 * 60)

    return () => clearInterval(interval)
  }, [isTodoTimerRunning])

  return { currentTime: timeUtils.getTimeProps(currentTime) }
}
