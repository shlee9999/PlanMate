import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormattedTime } from 'utils/helper'
import { TodoItems } from 'types'
import {
  Root,
  LeftWrapper,
  StartButton,
  PauseButton,
  SubjectTitle,
  Time,
  RightWrapper,
  EllipsisButton,
  RunningTime,
} from './styled'

import { useTimer } from 'hooks/useTimer'
import { RootState } from 'modules'
import { pauseTimer, runTimer } from 'modules/timer'
import EllipsisModal from '../EllipsisModal'

const TodoItem = ({ title, todo, buttonColor }: { title: string; todo: TodoItems; buttonColor: string }) => {
  const isTotalTimerRunning = useSelector((state: RootState) => state.timer.isRunning)
  const [isTodoTimerRunning, setIsTodoTimerRunning] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const { startTimer, stopTimer, time } = useTimer({ defaultTime: +todo.startAt })
  const formattedTime: string = useFormattedTime(time)
  const startTotalTimer = (): void => {
    dispatch(runTimer())
  }

  const stopTotalTimer = (): void => {
    dispatch(pauseTimer())
  }

  const onClickStartButton = (): void => {
    if (!isTotalTimerRunning) {
      setIsTodoTimerRunning(true)
      startTotalTimer()
      if (todo.type === 'study') dispatch({ type: 'STUDY' })
      if (todo.type === 'exercise') dispatch({ type: 'EXERCISE' })
    }
  }

  useEffect(() => {
    if (!isTodoTimerRunning) {
      stopTimer()
      return
    }
    startTimer()
  }, [isTodoTimerRunning])

  const onClickPauseButton = (): void => {
    setIsTodoTimerRunning(false)
    stopTotalTimer()
  }

  const OnClickEllipsisButton = () => {
    setIsEllipsisOpen(true)
  }
  const closeEllipsisModal = () => {
    setIsEllipsisOpen(false)
  }
  return (
    <Root>
      <LeftWrapper>
        {isTodoTimerRunning ? (
          <PauseButton color={buttonColor} onClick={onClickPauseButton}></PauseButton>
        ) : (
          <StartButton color={buttonColor} onClick={onClickStartButton}></StartButton>
        )}
        <SubjectTitle>{title}</SubjectTitle>
      </LeftWrapper>
      <RightWrapper>
        {isTodoTimerRunning ? (
          <RunningTime color={buttonColor}>{formattedTime}</RunningTime>
        ) : (
          <Time>{formattedTime}</Time>
        )}
        <EllipsisButton onClick={OnClickEllipsisButton}></EllipsisButton>
      </RightWrapper>
      {isEllipsisOpen && (
        <EllipsisModal closeModal={closeEllipsisModal} todo={todo} isTodoTimerRunning={isTodoTimerRunning} />
      )}
    </Root>
  )
}

export default TodoItem
