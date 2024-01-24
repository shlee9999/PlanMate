import { RightArrow } from 'assets/SvgComponents'
import { InfoBox, NoContentDescription } from 'components'
import styled from 'styled-components'
import { DDayItem } from '..'

export const Root = styled(InfoBox)`
  position: relative;
  border-radius: 8px;
  padding: 24px;
`

export const DdayList = styled.div`
  padding: 2px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
export const StyledDDayItem = styled(DDayItem)``

export const ViewMore = styled.div`
  position: absolute;
  top: -23px;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.theme.text.gray1};
`
export const NextArrow = styled(RightArrow)``
export const NoDdayDescription = styled(NoContentDescription)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
