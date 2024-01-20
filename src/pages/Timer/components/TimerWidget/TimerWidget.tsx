import { timeUtils } from 'utils'
import * as s from './styled'

export const TimerWidget = ({ totalTime }: { totalTime: number }) => {
  const formattedTime: string = timeUtils.getFormattedTime(totalTime)
  return (
    <s.Root>
      <s.Mode>공부</s.Mode>
      <s.Timer>{formattedTime}</s.Timer>
    </s.Root>
  )
}
