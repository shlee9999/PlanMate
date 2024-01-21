import { FlexRow, PageRoot } from 'commonStyled'
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
  gap: 30px;
  display: flex;
  flex-direction: column;
  padding: 25px 32px;
  height: 100%;
`
export const EventName = styled.p``
export const EventNameInput = styled.input`
  flex-grow: 1;
`
export const EventDateHeader = styled.p``
export const EventDate = styled.p``
export const CalendarBox = styled(InfoBox)`
  flex-grow: 1;
  overflow: hidden;
  padding: 66px 72px;
`
export const EventCalendar = styled(Calendar)`
  max-width: none;
  height: 100%;
  width: 100%;
`
export const AddButton = styled(ActionButton)``
