import * as s from './styled'
import { TodoItemType } from 'types'
import { EllipsisModal } from '..'
import { useTimerItem } from './useTimerItem'
import { useModal } from 'hooks'
import React from 'react'

type TimerItemProps = {
  title: string
  todo: TodoItemType
  buttonColor: string
  setIsTimerRunning: (state: boolean) => void
}
export const TimerItem = React.memo(({ title, todo, buttonColor, setIsTimerRunning }: TimerItemProps) => {
  const { formattedTime, onClickPauseButton, onClickStartButton, isTodoTimerRunning } = useTimerItem({
    todo,
    setIsTimerRunning,
  })
  const { isOpen: isEllipsisOpen, closeModal: closeEllipsisModal, openModal: openEllipsisModal } = useModal()
  // console.log(title, 'render')
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
        <s.EllipsisButton onClick={openEllipsisModal}></s.EllipsisButton>
      </s.RightWrapper>
      <EllipsisModal closeModal={closeEllipsisModal} todo={todo} isOpen={isEllipsisOpen} />
    </s.TimerItem>
  )
})
TimerItem.displayName = 'TimerItem'
