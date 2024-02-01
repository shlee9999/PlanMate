import * as s from './styled'
import { timeUtils } from 'utils'
import { useTotalTimer } from './useTotalTimer'

export const TotalTimer = ({ isTimerRunning }: { isTimerRunning: boolean }) => {
  const { totalTime } = useTotalTimer({ isTimerRunning })
  return <s.Timer>{timeUtils.getFormattedTime(totalTime)}</s.Timer>
}
