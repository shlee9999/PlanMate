import { P16 } from 'commonStyled'
import styled from 'styled-components'

export const StatsPageStatsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 22px 24px 0 24px; /*BumpGraph 자체 바텀 마진이 있음 */
  display: flex;
  flex-direction: column;
`
export const TimerPageStatsContainer = styled.div`
  padding: 8px 15px;
`

export const Header = styled.p`
  ${P16}
  align-self: flex-start;
  padding-bottom: 10px;
`

export const UpperContainer = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  row-gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media screen and (${(props) => props.theme.medium}) {
    flex-direction: column;
  }
`
