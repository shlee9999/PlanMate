import { RootState } from 'modules'
import { blockNav, approveNav } from 'modules/isNavBlocked'
import { useUpdateSubjectMutation } from 'pages/Timer/hooks/mutations'
import { useDispatch, useSelector } from 'react-redux'
import { timeUtils } from 'utils'

type useTimerButtonProps = {
  startTodoTimer: () => void
  stopTodoTimer: () => void
  setStartTime: (time: string) => void
  startTime: string
  subjectId: number
}

export const useTimerButton = ({
  startTodoTimer,
  setStartTime,
  stopTodoTimer,
  startTime,
  subjectId,
}: useTimerButtonProps) => {
  // const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const dispatch = useDispatch()
  const mutateUpdateSubject = useUpdateSubjectMutation()
  const onClickStartButton = (): void => {
    // if (isNavBlocked) return
    startTodoTimer()
    dispatch(blockNav())
    setStartTime(timeUtils.getCurrentTime())
  }
  const onClickPauseButton = () => {
    stopTodoTimer()
    dispatch(approveNav())
    // mutateUpdateSubject({
    //   endAt: timeUtils.getCurrentTime(),
    //   startAt: startTime,
    //   subjectId,
    // })
  }
  return { onClickPauseButton, onClickStartButton }
}
