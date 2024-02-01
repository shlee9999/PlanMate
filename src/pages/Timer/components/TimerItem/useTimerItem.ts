import { useState, useEffect } from 'react'
import { timeUtils } from 'utils'
import { TodoItemType } from 'types'
import { useTimer } from 'pages/Timer/hooks'
import { useCurrentTime, useTimerButton } from './hooks'

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
  const { onClickPauseButton, onClickStartButton } = useTimerButton({
    startTodoTimer,
    setStartTime,
    stopTodoTimer,
    startTime,
    subjectId: todo.subjectId,
  })
  useCurrentTime({ isTodoTimerRunning, startTime, subjectId: todo.subjectId })
  //* backend와 시간 맞춰주기
  useEffect(() => setDefaultTime(todo.time), [todo.time])
  return {
    formattedTime,
    onClickPauseButton,
    onClickStartButton,
    isTodoTimerRunning,
  }
}
