import * as s from './styled'
import { useState, useEffect } from 'react'
import { TodoItemType } from 'types'
import { useTimer } from 'pages/Timer/hooks'
import { EllipsisModal } from '..'
import { timeUtils } from 'utils'
import { useCurrentTime } from 'pages/Timer/components/TimerItem/hooks/useCurrentTime'
import { useModal } from 'hooks'
import { useTimerButton } from './hooks/useTimerButton'

type TimerItemProps = {
  title: string
  todo: TodoItemType
  buttonColor: string
  isTotalTimerRunning: boolean
  startTotalTimer: () => void
  stopTotalTimer: () => void
}
export const TimerItem = ({
  title,
  todo,
  buttonColor,
  startTotalTimer,
  stopTotalTimer,
  isTotalTimerRunning,
}: TimerItemProps) => {
  const { isOpen: isEllipsisOpen, closeModal: closeEllipsisModal, openModal: openEllipsisModal } = useModal()
  const OnClickEllipsisButton = () => !isTotalTimerRunning && openEllipsisModal()
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
    startTotalTimer,
    setStartTime,
    stopTodoTimer,
    stopTotalTimer,
    startTime,
    subjectId: todo.subjectId,
  })
  useCurrentTime({ isTodoTimerRunning, startTime, subjectId: todo.subjectId })

  //* backend와 시간 맞춰주기
  useEffect(() => setDefaultTime(todo.time), [todo.time])

  return (
    <s.TimerItem>
      <s.LeftWrapper>
        {isTodoTimerRunning ? (
          <s.PauseButton color={buttonColor} onClick={onClickPauseButton} fill={buttonColor} />
        ) : (
          <s.StartButton color={buttonColor} onClick={onClickStartButton} fill={buttonColor} />
        )}
        <s.SubjectTitle>{title}</s.SubjectTitle>
      </s.LeftWrapper>
      <s.RightWrapper>
        {isTodoTimerRunning ? (
          <s.RunningTime color={buttonColor}>{formattedTime}</s.RunningTime>
        ) : (
          <s.Time>{formattedTime}</s.Time>
        )}
        <s.EllipsisButton onClick={OnClickEllipsisButton}></s.EllipsisButton>
      </s.RightWrapper>
      <EllipsisModal closeModal={closeEllipsisModal} todo={todo} isOpen={isEllipsisOpen} />
    </s.TimerItem>
  )
}
