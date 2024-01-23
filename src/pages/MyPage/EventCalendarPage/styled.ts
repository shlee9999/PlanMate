import { RightArrow } from 'assets/SvgComponents'
import { FlexRow, LeftArrow, PageRoot } from 'commonStyled'
import { ActionButton, InfoBox } from 'components'
import { Calendar } from 'pages/Stats/components'
import { DDayContainer } from '../components'
import styled, { css } from 'styled-components'

export const Root = styled(PageRoot)`
  padding: 0 5%;
`

export const BoxContainer = styled(FlexRow)`
  margin-top: 20px;
  position: relative;
  gap: 16px;
  height: 80vh;
  padding: 30px 50px;
  justify-content: space-between;
`
export const DDayContainerWrapper = styled.div`
  position: relative;
  height: 100%;
`
export const StyledDDayContainer = styled(DDayContainer)`
  height: 100%;
`

export const AddEventBox = styled(InfoBox)<{ $isEditing: boolean }>`
  flex-grow: 2;
  padding: 25px 32px 10px 32px;
  height: 100%;
  ${(props) =>
    props.$isEditing &&
    css`
      border: 2px solid ${props.theme.primary.default};
      &:hover {
        border: 2px solid ${props.theme.primary.default};
      }
    `}
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
  height: 100%;
  width: 100%;
  overflow: hidden;
  max-width: none;
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
export const BackButton = styled(LeftArrow)`
  position: absolute;
  top: -70px;
  left: -10px;
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.text.black2};
`
export const MainContainer = styled.div`
  padding-top: 20px;
`
export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
