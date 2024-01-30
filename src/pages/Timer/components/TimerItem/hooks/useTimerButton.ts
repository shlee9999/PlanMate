import { blockNav, approveNav } from 'modules/isNavBlocked'
import { useUpdateSubjectMutation } from 'pages/Timer/hooks/mutations'
import { useDispatch } from 'react-redux'
import { timeUtils } from 'utils'

type useTimerButtonProps = {
  startTodoTimer: () => void
  stopTodoTimer: () => void
  startTotalTimer: () => void
  stopTotalTimer: () => void
  setStartTime: (time: string) => void
  startTime: string
  subjectId: number
}

export const useTimerButton = ({
  startTodoTimer,
  startTotalTimer,
  setStartTime,
  stopTodoTimer,
  stopTotalTimer,
  startTime,
  subjectId,
}: useTimerButtonProps) => {
  const dispatch = useDispatch()
  const mutateUpdateSubject = useUpdateSubjectMutation()
  const onClickStartButton = (): void => {
    startTodoTimer()
    startTotalTimer()
    dispatch(blockNav())
    setStartTime(timeUtils.getCurrentTime())
  }
  const onClickPauseButton = () => {
    stopTodoTimer()
    stopTotalTimer()
    dispatch(approveNav())
    mutateUpdateSubject({
      endAt: timeUtils.getCurrentTime(),
      startAt: startTime,
      subjectId,
    })
  }
  return { onClickPauseButton, onClickStartButton }
}
