import { RightArrow } from 'assets/SvgComponents'
import { FlexRow, LeftArrow, PageRoot } from 'commonStyled'
import { ActionButton, InfoBox } from 'components'
import { FOOTER_HEIGHT, HEADER_HEIGHT } from 'constants/layout'
import { Calendar } from 'pages/Stats/components'
import styled from 'styled-components'

export const Root = styled(PageRoot)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`

export const BoxContainer = styled(FlexRow)`
  gap: 16px;
  height: 538px;
  padding: 30px 50px;
`
export const DDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
export const EventBox = styled(InfoBox)`
  padding: 24px;
  flex-grow: 1;
  height: 100%;
`
export const AddEventBox = styled(InfoBox)`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  padding: 25px 32px 10px 32px;
  height: 100%;
`
export const EventNameRow = styled(FlexRow)`
  margin-bottom: 20px;
  gap: 16px;
`
export const EventName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text.gray1};
`
export const EventNameInput = styled.input`
  flex-grow: 1;
  &:focus {
    outline: 1px solid ${(props) => props.theme.primary.default} !important;
  }
`
export const EventDateRow = styled(FlexRow)`
  margin-bottom: 15px;
`
export const EventDateHeader = styled.p`
  color: ${(props) => props.theme.text.gray1};
`
export const EventDate = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text.black2};
`
export const CalendarBox = styled(InfoBox)`
  flex-grow: 1;
  padding: 20px 30px;
  margin-left: 46px;
  margin-bottom: 10px;
`
export const EventCalendar = styled(Calendar)`
  max-width: none;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
export const CalendarHeader = styled(FlexRow)`
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translate(-50%);
  gap: 8px;
  align-items: end;
`
export const EventYear = styled.p`
  font-size: 21px;
  font-weight: 500;
`
export const NextYearButton = styled(RightArrow)`
  cursor: pointer;
`
export const PrevYearButton = styled(LeftArrow)`
  cursor: pointer;
`
export const AddButton = styled(ActionButton)``

export const ActionButtonContainer = styled(FlexRow)`
  /* position: absolute;
  right: 20px;
  bottom: 10px; */
  gap: 8px;
  align-self: flex-end;
`
