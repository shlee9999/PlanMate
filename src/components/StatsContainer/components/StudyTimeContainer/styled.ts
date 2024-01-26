import { H21_500, P12 } from 'commonStyled'
import { StatsContainerType } from 'enums'
import styled from 'styled-components'

type RootProps = {
  $type: StatsContainerType
}
export const StatsStudyTimeContainer = styled.div<RootProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;
  height: fit-content;
  min-width: 0;
  align-items: center;
  @media screen and (${(props) => props.theme.tablet}) {
    width: 100%;
    row-gap: 10px;
    column-gap: 0;
    flex-grow: 1;
    place-items: start start;
  }
`
export const TimerBox = styled.div`
  white-space: nowrap;
`
export const Header = styled.div`
  ${P12}
  display: flex;
  color: ${(props) => props.theme.text.gray1};
`
export const Time = styled.div`
  ${H21_500}
  color: ${(props) => props.theme.text.black1};
`
