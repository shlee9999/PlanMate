import { FlexRow, H21_500, P12 } from 'commonStyled'
import { StatsContainerType } from 'enums'
import styled from 'styled-components'

type RootProps = {
  $type: StatsContainerType
}
export const StatsRoot = styled.div<RootProps>`
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  height: fit-content;
  min-width: 0;
`
export const StudyTimeRow = styled(FlexRow)`
  &:first-child {
    gap: 27px;
  }
  width: 100%;
  gap: 20px;
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
