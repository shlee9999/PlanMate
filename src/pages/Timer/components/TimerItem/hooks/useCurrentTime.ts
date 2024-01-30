import { useUpdateSubjectMutation } from 'pages/Timer/hooks/mutations'
import { useState, useEffect } from 'react'
import { timeUtils } from 'utils'

type useCurrentTimeProps = {
  isTodoTimerRunning: boolean
  startTime: string
  subjectId: number
}

/**
 * 일시정지 시 백엔드와 시간 동기화
 */
export const useCurrentTime = ({ isTodoTimerRunning, startTime, subjectId }: useCurrentTimeProps) => {
  const getCurrentTime = () => new Date()
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  const mutateUpdateSubject = useUpdateSubjectMutation()
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getCurrentTime()
      setCurrentTime(newTime)
      const { minute, second } = timeUtils.getTimeProps(newTime)
      // 매시 30분 정각에 callback 함수를 실행합니다.
      if (isTodoTimerRunning && minute === 30 && second === 0)
        mutateUpdateSubject({
          endAt: timeUtils.getCurrentTime(),
          startAt: startTime,
          subjectId,
        })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return { currentTime: timeUtils.getTimeProps(currentTime) }
}
