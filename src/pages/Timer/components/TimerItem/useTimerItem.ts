import { useState, useEffect } from 'react'
import { timeUtils } from 'utils'
import { TodoItemType } from 'types'
import { useTimer } from 'pages/Timer/hooks'
import { useCurrentTime } from './hooks'

type useTimerItemProps = {
  todo: TodoItemType
}

export const useTimerItem = ({ todo }: useTimerItemProps) => {
  const {
    startTimer: startTodoTimer,
    stopTimer: stopTodoTimer,
    time: todoTime,
    setDefaultTime,
    isRunning: isTodoTimerRunning,
  } = useTimer({ defaultTime: todo.time })
  const formattedTime: string = timeUtils.getFormattedTime(+todoTime)
  const [startTime, setStartTime] = useState('')

  useCurrentTime({ isTodoTimerRunning, startTime, subjectId: todo.subjectId }) //* backend와 시간 맞춰주기
  useEffect(() => setDefaultTime(todo.time), [todo.time])

  return {
    formattedTime,
    isTodoTimerRunning,
    startTodoTimer,
    stopTodoTimer,
    setStartTime,
    startTime,
  }
}
