import { Dispatch, SetStateAction, memo } from 'react'
import * as s from './styled'
import { useTimerButton } from './hooks'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

type TimerButtonProps = {
  subjectId: number
  startTodoTimer: () => void
  stopTodoTimer: () => void
  setStartTime: Dispatch<SetStateAction<string>>
  startTime: string
  colorHex: string
  isTodoTimerRunning: boolean
}

export const TimerButton = memo(
  ({
    isTodoTimerRunning,
    subjectId,
    startTodoTimer,
    stopTodoTimer,
    setStartTime,
    startTime,
    colorHex,
  }: TimerButtonProps) => {
    const { onClickPauseButton, onClickStartButton } = useTimerButton({
      startTodoTimer,
      setStartTime,
      stopTodoTimer,
      startTime,
      subjectId,
    })
    return isTodoTimerRunning ? (
      <s.PauseButton color={colorHex} onClick={onClickPauseButton} fill={colorHex} />
    ) : (
      <s.StartButton color={colorHex} onClick={onClickStartButton} fill={colorHex} />
    )
  }
)
TimerButton.displayName = 'TimerButton'
