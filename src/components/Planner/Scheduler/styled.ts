import styled from 'styled-components'

export const Root = styled.table`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  width: 80vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Cell = styled.td`
  &:first-child {
    border-bottom: none;
  }
  border-right: 1px solid #dddede;
  border-bottom: 1px solid #dddede;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  color: #666666;
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
  color: #666666;
`
interface DayCellProps {
  $today: boolean
}
export const DayCell = styled(Cell)<DayCellProps>`
  color: ${(props) => (props.$today ? '#1DB951' : '')};
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
      background-color: #dddede;
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
  &:last-child {
    ${DataCell} {
      border-bottom: 0;
    }
  }
`

interface AppointmentWrapperProps {
  $bgColor: string
  $height: number
}
export const AppointmentWrapper = styled.div<AppointmentWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.$height * 103}%;
  box-sizing: border-box;
  text-transform: uppercase;
  color: white;
  text-align: center;
  font-weight: 600;
  opacity: 0.5;
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.7;
  }
  z-index: 2;
  padding-top: 10px;
`
export const Appointment = styled.p``
