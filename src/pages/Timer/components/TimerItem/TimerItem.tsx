import React from 'react'
import * as s from './styled'
import { TodoItemType } from 'types'
import { EllipsisModal } from '..'
import { useTimerItem } from './useTimerItem'
import { useModal } from 'hooks'
import { TimerButton } from './TimerButton'

type TimerItemProps = {
  todo: TodoItemType
}
export const TimerItem = React.memo(({ todo }: TimerItemProps) => {
  const { formattedTime, isTodoTimerRunning, startTodoTimer, stopTodoTimer, setStartTime, startTime } = useTimerItem({
    todo,
  })
  const { isOpen: isEllipsisOpen, closeModal: closeEllipsisModal, openModal: openEllipsisModal } = useModal()

  return (
    <s.TimerItem>
      <s.LeftContainer>
        <TimerButton
          isTodoTimerRunning={isTodoTimerRunning}
          todo={todo}
          startTodoTimer={startTodoTimer}
          stopTodoTimer={stopTodoTimer}
          setStartTime={setStartTime}
          startTime={startTime}
        />
        <s.SubjectTitle>{todo.name}</s.SubjectTitle>
      </s.LeftContainer>
      <s.RightContainer>
        <s.Time $isTodoTimerRunning={isTodoTimerRunning} color={todo.colorHex}>
          {formattedTime}
        </s.Time>
        <s.EllipsisButton onClick={openEllipsisModal}></s.EllipsisButton>
      </s.RightContainer>
      <EllipsisModal closeModal={closeEllipsisModal} todo={todo} isOpen={isEllipsisOpen} />
    </s.TimerItem>
  )
})
TimerItem.displayName = 'TimerItem'
