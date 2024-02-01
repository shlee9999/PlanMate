import * as s from './styled'
import { timeUtils } from 'utils'
import { useTotalTimer } from './useTotalTimer'

export const TotalTimer = () => {
  const { totalTime } = useTotalTimer()
  return <s.Timer>{timeUtils.getFormattedTime(totalTime)}</s.Timer>
}
