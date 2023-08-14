//통계 탭
import React, { FC } from 'react'
import { MenuBox } from 'components/Stats/Menu'
import { Root, StatsContainer } from './styled'

export const StatsPage: FC = () => {
  return (
    <Root>
      <StatsContainer>
        <MenuBox></MenuBox>
      </StatsContainer>
    </Root>
  )
}
