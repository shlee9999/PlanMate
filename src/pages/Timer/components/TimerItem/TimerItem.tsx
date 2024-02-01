import * as s from './styled'
import { TodoItemType } from 'types'
import { EllipsisModal } from '..'
import { useTimerItem } from './useTimerItem'
import { useModal } from 'hooks'
import React from 'react'

type TimerItemProps = {
  todo: TodoItemType
}
export const TimerItem = React.memo(({ todo }: TimerItemProps) => {
  const { formattedTime, onClickPauseButton, onClickStartButton, isTodoTimerRunning } = useTimerItem({
    todo,
  })
  const { isOpen: isEllipsisOpen, closeModal: closeEllipsisModal, openModal: openEllipsisModal } = useModal()
  console.log(todo.name, 'render')

  return (
    <s.TimerItem>
      <s.LeftWrapper>
        {isTodoTimerRunning ? (
          <s.PauseButton color={todo.colorHex} onClick={onClickPauseButton} fill={todo.colorHex} />
        ) : (
          <s.StartButton color={todo.colorHex} onClick={onClickStartButton} fill={todo.colorHex} />
        )}
        <s.SubjectTitle>{todo.name}</s.SubjectTitle>
      </s.LeftWrapper>
      <s.RightWrapper>
        {isTodoTimerRunning ? (
          <s.RunningTime color={todo.colorHex}>{formattedTime}</s.RunningTime>
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
