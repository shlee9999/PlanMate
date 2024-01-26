import { H21_500, P12 } from 'commonStyled'
import { StatsContainerType } from 'enums'
import styled from 'styled-components'

type RootProps = {
  $type: StatsContainerType
}
export const Root = styled.div<RootProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 20px;
`
export const TimerBox = styled.div``

export const Header = styled.div`
  ${P12}
  width: 100%;
  height: 18px;
  display: flex;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
`
export const Time = styled.div`
  ${H21_500}
  width: 100%;
  height: 50px;
  display: flex;
  color: ${(props) => props.theme.text.black1};
`
