import * as s from './styled'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { TodoItemType } from 'types'
import { useTimer } from 'pages/Timer/hooks'
import { EllipsisModal } from '..'
import { useUpdateSubjectMutation } from 'pages/Timer/hooks/mutations'
import { timeUtils } from 'utils'
import { useDispatch } from 'react-redux'
import { approveNav, blockNav } from 'modules/isNavBlocked'

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
  const [isTodoTimerRunning, setIsTodoTimerRunning] = useState(false)
  const [isEllipsisOpen, setIsEllipsisOpen] = useState(false)
  const { startTimer, stopTimer, time, setDefaultTime } = useTimer({ defaultTime: todo.time })
  const formattedTime: string = timeUtils.getFormattedTime(+time)
  const [startTime, setStartTime] = useState('')

  const onClickStartButton = (): void => {
    dispatch(blockNav())
    setStartTime(moment().format('HH:mm:ss')) //백엔드 리스폰스 확인할것
    if (!isTotalTimerRunning) {
      setIsTodoTimerRunning(true)
      startTotalTimer()
    }
  }
  const mutateUpdateSubject = useUpdateSubjectMutation()
  const onClickPauseButton = () => {
    dispatch(approveNav())
    setIsTodoTimerRunning(false)
    stopTotalTimer()
    mutateUpdateSubject({
      endAt: moment().format('HH:mm:ss'),
      startAt: startTime,
      subjectId: todo.subjectId,
    })
  }
  const OnClickEllipsisButton = () => !isTotalTimerRunning && setIsEllipsisOpen(true)
  const closeEllipsisModal = () => setIsEllipsisOpen(false)

  useEffect(() => {
    isTodoTimerRunning ? startTimer() : stopTimer()
  }, [isTodoTimerRunning])

  useEffect(() => {
    //* backend와 시간 맞춰주기
    setDefaultTime(todo.time)
  }, [todo.time])

  return (
    <s.Root>
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
    </s.Root>
  )
}
