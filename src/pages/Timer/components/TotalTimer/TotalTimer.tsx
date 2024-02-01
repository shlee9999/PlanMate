import * as s from './styled'
import { timeUtils } from 'utils'
import { useTotalTimer } from './useTotalTimer'

export const TotalTimer = ({
  stopBreakTimer,
  isTimerRunning,
}: {
  stopBreakTimer: () => void
  isTimerRunning: boolean
}) => {
  const { totalTime } = useTotalTimer({ stopBreakTimer, isTimerRunning })
  return <s.Timer>{timeUtils.getFormattedTime(totalTime)}</s.Timer>
}
