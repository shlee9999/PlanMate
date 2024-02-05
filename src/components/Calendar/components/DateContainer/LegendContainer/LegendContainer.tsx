import { memo } from 'react'
import * as s from './styled'

type LegendContainerProps = {
  legend: boolean
}

export const LegendContainer = memo(({ legend }: LegendContainerProps) => {
  return (
    legend && (
      <s.LegendContainer>
        <s.Legend>
          <s.Circle />
          0~3시간
        </s.Legend>
        <s.Legend>
          <s.Circle />
          4~7시간
        </s.Legend>
        <s.Legend>
          <s.Circle />
          8~11시간
        </s.Legend>
        <s.Legend>
          <s.Circle />
          12시간 이상
        </s.Legend>
      </s.LegendContainer>
    )
  )
})
LegendContainer.displayName = 'LegendContainer'
