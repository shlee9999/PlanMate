//통계 탭
import React from 'react'
import { MenuBox } from 'components/Stats/menu'
import { StatsContainer } from './styled'

export const StatsPage: React.FC = () => {
  return (
    <StatsContainer>
      <MenuBox></MenuBox>
    </StatsContainer>
  )
}
