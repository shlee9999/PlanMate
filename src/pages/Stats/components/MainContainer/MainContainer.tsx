import { FC } from 'react'
import * as s from './styled'
import { StatsContainerPages } from 'types'
import { Calendar, StatsContainer } from 'components'

export const MainContainer: FC = () => {
  return (
    <s.MainContainer>
      <s.LeftInfoBox left>
        <Calendar legend blockFuture todayButton headerButtonLayout="center" />
      </s.LeftInfoBox>
      <s.RightInfoBox right>
        <StatsContainer type={StatsContainerPages.stats} />
      </s.RightInfoBox>
    </s.MainContainer>
  )
}
