//통계 탭
import React, { FC } from 'react'
import { Root, StatsContainer } from './styled'
import { MenuBox } from 'components/Stats/menu'

export const StatsPage: FC = () => {
  return (
    <Root>
      <StatsContainer>
        <MenuBox></MenuBox>
      </StatsContainer>
    </Root>
  )
}
