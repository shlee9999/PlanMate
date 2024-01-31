import * as s from './styled'
import { TodoItemType } from 'types'
import { EllipsisModal } from '..'
import { useTimerItem } from './hooks/useTimerItem'
import { useModal } from 'hooks'

type TimerItemProps = {
  title: string
  todo: TodoItemType
  buttonColor: string
  startTotalTimer: () => void
  stopTotalTimer: () => void
}
export const TimerItem = ({ title, todo, buttonColor, startTotalTimer, stopTotalTimer }: TimerItemProps) => {
  const { formattedTime, onClickPauseButton, onClickStartButton, isTodoTimerRunning } = useTimerItem({
    startTotalTimer,
    stopTotalTimer,
    todo,
  })
  const { isOpen: isEllipsisOpen, closeModal: closeEllipsisModal, openModal: openEllipsisModal } = useModal()
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
}
