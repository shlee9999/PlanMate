import * as s from './styled'
import { useState, useEffect } from 'react'
import { TodoItemType } from 'types'
import { useTimer } from 'pages/Timer/hooks'
import { EllipsisModal } from '..'
import { useUpdateSubjectMutation } from 'pages/Timer/hooks/mutations'
import { timeUtils } from 'utils'
import { useDispatch } from 'react-redux'
import { approveNav, blockNav } from 'modules/isNavBlocked'
import { useCurrentTime } from 'pages/Timer/hooks/hooks/useCurrentTime'
import { useModal } from 'hooks'

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
  const dispatch = useDispatch()
  const mutateUpdateSubject = useUpdateSubjectMutation()
  const { isOpen: isEllipsisOpen, closeModal: closeEllipsisModal, openModal: openEllipsisModal } = useModal()
  const {
    startTimer: startTodoTimer,
    stopTimer: stopTodoTimer,
    time: todoTime,
    setDefaultTime,
    isRunning: isTodoTimerRunning,
  } = useTimer({ defaultTime: todo.time })
  const formattedTime: string = timeUtils.getFormattedTime(+todoTime)
  const [startTime, setStartTime] = useState('')
  useCurrentTime({
    callback: () =>
      isTodoTimerRunning &&
      mutateUpdateSubject({
        endAt: timeUtils.getCurrentTime(),
        startAt: startTime,
        subjectId: todo.subjectId,
      }),
  })

  const OnClickEllipsisButton = () => !isTotalTimerRunning && openEllipsisModal()
  const onClickStartButton = (): void => {
    startTodoTimer()
    startTotalTimer()
    dispatch(blockNav())
    setStartTime(timeUtils.getCurrentTime())
  }
  const onClickPauseButton = () => {
    stopTodoTimer()
    stopTotalTimer()
    dispatch(approveNav())
    mutateUpdateSubject({
      endAt: timeUtils.getCurrentTime(),
      startAt: startTime,
      subjectId: todo.subjectId,
    })
  }

  useEffect(() => {
    //* backend와 시간 맞춰주기
    setDefaultTime(todo.time)
  }, [todo.time])

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
