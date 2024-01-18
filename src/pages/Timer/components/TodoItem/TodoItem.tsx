import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoItemType } from 'types'
import { useTimer } from 'pages/Timer/hooks'
import { RootState } from 'modules'
import { increaseTimer, pauseTimer, runTimer } from 'modules/timer'
import { EllipsisModal } from '..'
import { useUpdateSubjectMutation } from 'pages/Timer/hooks/mutations'
import { timeUtils } from 'utils/helper'
import moment from 'moment'
import * as s from './styled'

export const TodoItem = ({ title, todo, buttonColor }: { title: string; todo: TodoItemType; buttonColor: string }) => {
  const isTotalTimerRunning = useSelector((state: RootState) => state.timer.isRunning)
  const [isTodoTimerRunning, setIsTodoTimerRunning] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const { startTimer, stopTimer, time } = useTimer({ defaultTime: todo.time })
  const formattedTime: string = timeUtils.getFormattedTime(+time)
  const [startTime, setStartTime] = useState<string>('')
  const startTotalTimer = () => dispatch(runTimer())
  const stopTotalTimer = () => dispatch(pauseTimer())

  const onClickStartButton = (): void => {
    setStartTime(moment().format('HH:mm:ss')) //백엔드 리스폰스 확인할것
    if (!isTotalTimerRunning) {
      setIsTodoTimerRunning(true)
      startTotalTimer()
    }
  }
  const mutateUpdateSubject = useUpdateSubjectMutation()
  const onClickPauseButton = () => {
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
    if (!isTodoTimerRunning) stopTimer()
    else startTimer()
  }, [isTodoTimerRunning])

  useEffect(() => {
    dispatch(increaseTimer())
  }, [time])

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
