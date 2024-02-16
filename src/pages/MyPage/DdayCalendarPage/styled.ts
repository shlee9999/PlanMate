import { RightArrow } from 'assets/SvgComponents'
import { FlexRow, H14_500, H21_500, LeftArrow, PageRoot } from 'commonStyled'
import { ActionButton, InfoBox } from 'components'
import { Calendar } from 'components'
import { DdayContainer } from '../components'
import styled, { css } from 'styled-components'

export const DdayCalendarPage = styled(PageRoot)``

export const BoxContainer = styled(FlexRow)`
  margin-top: 20px;
  position: relative;
  gap: 16px;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.medium}) {
    flex-direction: column;
  }
`

export const StyledDDayContainer = styled(DdayContainer)`
  min-width: 245px;
  flex: 1 1 300px;
  height: 60vh;
  @media screen and (${(props) => props.theme.large}) {
    width: auto;
  }
  @media screen and (${(props) => props.theme.medium}) {
    height: 40vh;
    width: 100%;
  }
`

export const AddDdayBox = styled(InfoBox)<{ $isEditing: boolean }>`
  flex-grow: 5;
  height: 60vh;
  padding: 25px 32px 10px 32px;
  @media screen and (${(props) => props.theme.medium}) {
    width: 100%;
  }
  @media screen and (${(props) => props.theme.small}) {
    padding: 25px 5px 10px 5px;
  }
  ${(props) =>
    props.$isEditing &&
    css`
      border: 2px solid ${props.theme.primary.default};
      &:hover {
        border: 2px solid ${props.theme.primary.default};
      }
    `}
`

export const DdayNameRow = styled(FlexRow)`
  margin-bottom: 20px;
  gap: 16px;
  @media screen and (${(props) => props.theme.small}) {
    margin-bottom: 40px;
  }
`
export const DdayName = styled.p`
  ${H14_500}
  color: ${(props) => props.theme.text.gray1};
`
export const DdayNameInput = styled.input`
  flex-grow: 1;
  &:focus {
    outline: 1px solid ${(props) => props.theme.primary.default} !important;
  }
`
export const DdayDateRow = styled(FlexRow)`
  margin-bottom: 15px;
  gap: 16px;
  @media screen and (${(props) => props.theme.small}) {
    display: none;
  }
`
export const DdayDateHeader = styled.p`
  color: ${(props) => props.theme.text.gray1};
`
export const DdayDate = styled.p`
  ${H14_500}
  color: ${(props) => props.theme.text.black2};
`
export const CalendarBox = styled(InfoBox)`
  flex-grow: 1;
  padding: 20px 30px;
  margin-left: 46px;
  margin-bottom: 10px;
  overflow: visible;
  @media screen and (${(props) => props.theme.large}) {
    padding: 20px;
  }
  @media screen and (${(props) => props.theme.small}) {
    margin-left: 0;
    margin-top: 30px;
  }
`
export const StyledCalendar = styled(Calendar)`
  height: 100%;
  width: 100%;
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
export const DdayYear = styled.p`
  ${H21_500}
`
export const NextYearButton = styled(RightArrow)`
  cursor: pointer;
`
export const PrevYearButton = styled(LeftArrow)`
  cursor: pointer;
`
export const RegisterButton = styled(ActionButton)``

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

export const DeleteButton = styled(ActionButton)`
  order: -1;
`
export const EditButton = styled(ActionButton)``
