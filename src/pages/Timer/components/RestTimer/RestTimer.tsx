import * as s from './styled'
import { FC } from 'react'
import { useRestTimer } from './useRestTimer'
import { Display } from 'components'

export const RestTimer: FC = () => {
  const { formattedRestTime } = useRestTimer()
  return (
    <>
      <Display on="XLARGE">
        <s.RestTimer>
          오늘은 휴식 시간을 <s.YellowTypo as="span">{formattedRestTime}</s.YellowTypo> 가졌네요!
        </s.RestTimer>
      </Display>
      <Display on="LARGE">
        <s.RestTimer>
          오늘은 휴식 시간을 <s.YellowTypo as="span">{formattedRestTime}</s.YellowTypo> 가졌네요!
        </s.RestTimer>
      </Display>
      <Display on="MEDIUM">
        <s.RestTimer>
          오늘은 휴식 시간을 <s.YellowTypo as="span">{formattedRestTime}</s.YellowTypo> 가졌네요!
        </s.RestTimer>
      </Display>
      <Display on="SMALL">
        <s.RestTimer>
          오늘은 <s.YellowTypo as="span">{formattedRestTime}</s.YellowTypo> 쉬었어요!
        </s.RestTimer>
      </Display>
    </>
  )
}
