import React from 'react'
import * as s from './styled'
import { TodoItemType } from 'types'
import { EllipsisModal } from '..'
import { useTimerItem } from './useTimerItem'
import { useModal } from 'hooks'
import { TimerButton } from './TimerButton'
import { EllipsisButton } from './EllipsisButton'

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
          subjectId={todo.subjectId}
          colorHex={todo.colorHex}
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
        <EllipsisButton openModal={openEllipsisModal} />
      </s.RightContainer>
      <EllipsisModal closeModal={closeEllipsisModal} todo={todo} isOpen={isEllipsisOpen} />
    </s.TimerItem>
  )
})
TimerItem.displayName = 'TimerItem'
