import { FC } from 'react'
import * as s from './styled'
import { TodoItemType } from 'types'
import { useTimerButton } from './hooks'

type TimerButtonProps = {
  isTodoTimerRunning: boolean
  todo: TodoItemType
  startTodoTimer: () => void
  stopTodoTimer: () => void
  setStartTime: (time: string) => void
  startTime: string
}

export const TimerButton: FC<TimerButtonProps> = ({
  isTodoTimerRunning,
  todo,
  startTodoTimer,
  stopTodoTimer,
  setStartTime,
  startTime,
}) => {
  const { onClickPauseButton, onClickStartButton } = useTimerButton({
    startTodoTimer,
    setStartTime,
    stopTodoTimer,
    startTime,
    subjectId: todo.subjectId,
  })
  return isTodoTimerRunning ? (
    <s.PauseButton color={todo.colorHex} onClick={onClickPauseButton} fill={todo.colorHex} />
  ) : (
    <s.StartButton color={todo.colorHex} onClick={onClickStartButton} fill={todo.colorHex} />
  )
}
