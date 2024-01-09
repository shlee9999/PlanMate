import styled from 'styled-components'
import RightArrowImg from 'assets/images/right_arrow.png'
import { ModalExitButton } from '../SelectModal/styled'
export const Root = styled.table`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  width: 80vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`
const Cell = styled.td`
  &:first-child {
    border-bottom: none;
  }
  &:last-child {
    border-right: none;
  }
  border-right: 1px solid ${(props) => props.theme.border.default};
  border-bottom: 1px solid ${(props) => props.theme.border.default};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.text.gray1};
`
export const DayCellRow = styled.tr`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.text.gray1};
`
interface DayCellProps {
  $today: boolean
}
export const DayCell = styled(Cell)<DayCellProps>`
  color: ${(props) => (props.$today ? `${props.theme.primary.default}` : '')};
`
export const DayTypo = styled.p``
export const DateTypo = styled.p``
interface DataCellProps {
  $isSelected: boolean
}
export const DataCell = styled(Cell)<DataCellProps>`
  position: relative;
  background-color: ${(props) => (props.$isSelected ? 'rgba(0, 0, 0, 0.1)' : 'transparent')};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:first-child {
    p {
      position: relative;
      top: -50%;
      left: 10%;
    }
    &::after {
      position: absolute;
      content: '';
      width: 24px;
      height: 1px;
      background-color: ${(props) => props.theme.border.default};
      top: -1px;
      right: 0;
    }
  }
`
export const DataCellRow = styled.tr`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  &:last-of-type {
    ${DataCell} {
      border-bottom: 0;
    }
  }
`

interface AppointmentWrapperProps {
  $bgColor: string
  $height: number
}
export const CloseButton = styled(ModalExitButton)`
  opacity: 0;
  top: 5px;
  right: 5px;
  width: 15px;
  background-size: contain;
`

export const AppointmentWrapper = styled.div<AppointmentWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.$height * 102.5}%;
  box-sizing: border-box;
  text-transform: uppercase;
  color: ${(props) => props.theme.background.white};
  text-align: center;
  font-weight: 600;
  opacity: 0.5;
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;
  &:hover {
    opacity: 0.6;
    ${CloseButton} {
      opacity: 1;
    }
  }
  &:active {
    opacity: 0.7;
  }
  z-index: 2;
  padding-top: 10px;
`
export const Appointment = styled.p``

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  font-size: 15px;
  color: ${(props) => props.theme.text.gray1};
`
const ArrowButton = styled.button`
  background-image: url(${RightArrowImg});
  width: 20px;
  height: 20px;
  background-position: center center;
  background-size: contain;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
  }
`
export const PrevButton = styled(ArrowButton)`
  transform: rotate(180deg);
`
export const NextButton = styled(ArrowButton)``
