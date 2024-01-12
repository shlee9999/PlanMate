import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudyTime, useFormattedTime } from 'utils/helper'
import { TodoItemType } from 'types'
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
import { increaseTimer, pauseTimer, runTimer } from 'modules/timer'
import EllipsisModal from '../EllipsisModal'
import moment from 'moment'
import { updateSubject } from 'api/subject/updateSubject'
import { AnimatePresence } from 'framer-motion'
import { ModalWrapper, ModalWrapperVar } from 'commonStyled'

const TodoItem = ({ title, todo, buttonColor }: { title: string; todo: TodoItemType; buttonColor: string }) => {
  const isTotalTimerRunning = useSelector((state: RootState) => state.timer.isRunning)
  const [isTodoTimerRunning, setIsTodoTimerRunning] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const closeModal = () => setIsEllipsisOpen(false)
  const { startTimer, stopTimer, time } = useTimer({ defaultTime: todo.time })
  const formattedTime: string = useFormattedTime(time)
  const [startTime, setStartTime] = useState<string>('')

  const startTotalTimer = (): void => {
    dispatch(runTimer())
  }

  const stopTotalTimer = (): void => {
    dispatch(pauseTimer())
  }

  const onClickStartButton = (): void => {
    setStartTime(moment().format('HH:mm:ss')) //백엔드 리스폰스 확인할것
    if (!isTotalTimerRunning) {
      setIsTodoTimerRunning(true)
      startTotalTimer()
    }
  }

  const onClickPauseButton = (): void => {
    updateSubject({
      endAt: moment().format('HH:mm:ss'),
      startAt: startTime,
      subjectId: todo.subjectId,
    }).then((res) => {
      setIsTodoTimerRunning(false)
      stopTotalTimer()
    })
  }

  const OnClickEllipsisButton = () => {
    if (isTotalTimerRunning) return
    setIsEllipsisOpen(true)
  }
  const closeEllipsisModal = () => {
    setIsEllipsisOpen(false)
  }

  useEffect(() => {
    if (!isTodoTimerRunning) {
      stopTimer()
      return
    }
    startTimer()
  }, [isTodoTimerRunning])

  useEffect(() => {
    dispatch(increaseTimer())
  }, [time])

  return (
    <Root>
      <LeftWrapper>
        {isTodoTimerRunning ? (
          <PauseButton color={buttonColor} onClick={onClickPauseButton} fill={buttonColor} />
        ) : (
          <StartButton color={buttonColor} onClick={onClickStartButton} fill={buttonColor} />
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
      <AnimatePresence>
        {isEllipsisOpen && (
          <ModalWrapper onClick={closeModal} variants={ModalWrapperVar} initial="initial" animate="visible" exit="exit">
            <EllipsisModal
              closeModal={closeEllipsisModal}
              todo={todo}
              isTodoTimerRunning={isTodoTimerRunning}
              isOpen={isEllipsisOpen}
            />
          </ModalWrapper>
        )}
      </AnimatePresence>
    </Root>
  )
}

export default TodoItem
