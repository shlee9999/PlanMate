//통계 탭
// import React from "react";
import styled from 'styled-components'
import { MenuBox } from 'components/Stats/menu'

const StatsContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StatsPage = () => {
  return (
    <StatsContainer>
      <MenuBox></MenuBox>
    </StatsContainer>
  )
}
export default StatsPage
