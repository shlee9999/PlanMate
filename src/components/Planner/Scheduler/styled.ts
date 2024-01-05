import styled from 'styled-components'
import { Scheduler } from '@devexpress/dx-react-scheduler-material-ui'

export const Root = styled.div`
  width: 90vw;
`
export const StyledScheduler = styled(Scheduler)``

export const AppointmentWrapper = styled.div<{ $bgColor: string }>`
  height: 100%;
  padding-top: 20px;
  text-transform: uppercas e;
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
`
export const Appointment = styled.p``
