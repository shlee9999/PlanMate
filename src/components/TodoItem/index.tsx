import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormattedTime } from '../../utils/helper'
import { Globals, TodoItems } from '../../types'
import { Root, LeftWrapper, StartButton, PauseButton, SubjectTitle, Time, RightWrapper, EllipsisButton } from './styled'
import EllipsisModal from '../Modals/EllipsisModal'
import { useTimer } from 'hooks/useTimer'
const TodoItem = ({ title, todo, buttonColor }: { title: string; todo: TodoItems; buttonColor: string }) => {
  const isTotalTimerRunning = useSelector((state: Globals) => state.isRunning)
  const [isTodoTimerRunning, setIsTodoTimerRunning] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const { startTimer, stopTimer, time } = useTimer({ defaultTime: 0 })
  const formattedTime: string = useFormattedTime(time)
  const startTotalTimer = (): void => {
    dispatch({ type: 'RUN_TIMER' })
  }

  const stopTotalTimer = (): void => {
    dispatch({ type: 'STOP_TIMER' })
  }

  const handleOnStart = (): void => {
    if (!isTotalTimerRunning) {
      setIsTodoTimerRunning(true)
      startTotalTimer()
      if (todo.category === 'study') dispatch({ type: 'STUDY' })
      if (todo.category === 'exercise') dispatch({ type: 'EXERCISE' })
    }
  }

  useEffect(() => {
    if (!isTodoTimerRunning) {
      stopTimer()
      return
    }
    startTimer()
  }, [isTodoTimerRunning])

  const handleOnPause = (): void => {
    setIsTodoTimerRunning(false)
    stopTotalTimer()
  }

  const handleOnClickEllipsisButton = () => {
    setIsEllipsisOpen(true)
  }
  const closeEllipsis = () => {
    setIsEllipsisOpen(false)
  }
  return (
    <Root backgroundColor={todo.category === 'study' ? 'pink' : 'skyblue'}>
      <LeftWrapper>
        {isTodoTimerRunning ? (
          <PauseButton color={buttonColor} onClick={handleOnPause}>
            ||
          </PauseButton>
        ) : (
          <StartButton color={buttonColor} onClick={handleOnStart}>
            &gt;
          </StartButton>
        )}
        <SubjectTitle>{title}</SubjectTitle>
      </LeftWrapper>
      <RightWrapper>
        <Time>{formattedTime}</Time>
        <EllipsisButton onClick={handleOnClickEllipsisButton}></EllipsisButton>
      </RightWrapper>
      {isEllipsisOpen && (
        <EllipsisModal closeModal={closeEllipsis} todo={todo} isTodoTimerRunning={isTodoTimerRunning} />
      )}
    </Root>
  )
}

export default TodoItem
