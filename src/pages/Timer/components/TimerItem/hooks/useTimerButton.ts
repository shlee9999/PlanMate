import { blockNav, approveNav } from 'modules/isNavBlocked'
import { useUpdateSubjectMutation } from 'pages/Timer/hooks/mutations'
import { useDispatch } from 'react-redux'
import { start } from 'repl'
import { timeUtils } from 'utils'

type useTimerButtonProps = {
  startTodoTimer: () => void
  stopTodoTimer: () => void
  setStartTime: (time: string) => void
  startTime: string
  subjectId: number
  setIsTimerRunning: (state: boolean) => void
}

export const useTimerButton = ({
  startTodoTimer,
  setStartTime,
  stopTodoTimer,
  startTime,
  subjectId,
  setIsTimerRunning,
}: useTimerButtonProps) => {
  const dispatch = useDispatch()
  const mutateUpdateSubject = useUpdateSubjectMutation()
  const onClickStartButton = (): void => {
    startTodoTimer()
    dispatch(blockNav())
    setStartTime(timeUtils.getCurrentTime())
    setIsTimerRunning(true)
  }
  const onClickPauseButton = () => {
    stopTodoTimer()
    dispatch(approveNav())
    mutateUpdateSubject({
      endAt: timeUtils.getCurrentTime(),
      startAt: startTime,
      subjectId,
    })
    setIsTimerRunning(false)
  }
  return { onClickPauseButton, onClickStartButton }
}
