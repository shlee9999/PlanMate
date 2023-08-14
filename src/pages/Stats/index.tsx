//통계 탭
import React, { FC } from 'react'
import { MenuBox } from 'components/Stats/menu'
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
