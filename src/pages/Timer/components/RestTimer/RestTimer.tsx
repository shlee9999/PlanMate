import * as s from './styled'
import { FC } from 'react'
import { useRestTimer } from './useRestTimer'

type RestTimerProps = {
  isTimerRunning: boolean
}
export const RestTimer: FC<RestTimerProps> = ({ isTimerRunning }) => {
  const { formattedRestTime } = useRestTimer({ isTimerRunning })
  return (
    <s.RestTimer>
      오늘은 휴식 시간을 <s.YellowTypo as="span">{formattedRestTime}</s.YellowTypo> 가졌네요!
    </s.RestTimer>
  )
}
