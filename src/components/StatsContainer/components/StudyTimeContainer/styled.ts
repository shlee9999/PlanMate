import { H21_500, P12 } from 'commonStyled'
import { StatsContainerType } from 'types'
import styled from 'styled-components'

type RootProps = {
  $type: StatsContainerType
}
export const StatsStudyTimeContainer = styled.div<RootProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: space-between;
  flex-grow: 1;
  row-gap: 20px;
  min-width: 0;
`
export const TimerBox = styled.div`
  &:first-child,
  &:nth-child(3) {
    padding-right: 10px;
  }

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
