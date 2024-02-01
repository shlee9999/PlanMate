import * as s from './styled'
import { FC } from 'react'
import { useRestTimer } from './useRestTimer'

export const RestTimer: FC = () => {
  const { formattedRestTime } = useRestTimer()
  return (
    <s.RestTimer>
      오늘은 휴식 시간을 <s.YellowTypo as="span">{formattedRestTime}</s.YellowTypo> 가졌네요!
    </s.RestTimer>
  )
}
