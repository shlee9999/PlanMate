import { Mode, Root, Timer } from './styled'
import { useFormattedTime } from 'utils/helper'
export const StudyTimerWidget = ({ totalTime }: { totalTime: number }) => {
  const formattedTime: string = useFormattedTime(totalTime)
  return (
    <Root>
      <Mode>공부</Mode>
      <Timer>{formattedTime}</Timer>
    </Root>
  )
}
