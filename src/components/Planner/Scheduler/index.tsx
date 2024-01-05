import { FC } from 'react'
import { Appointment, AppointmentWrapper, Root, StyledScheduler } from './styled'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
import { Appointments, WeekView } from '@devexpress/dx-react-scheduler-material-ui'

type SchedulerProps = {
  className?: string
}
interface IAppointment {
  text: string
  startDate: Date
  endDate: Date
  bgColor: string
}
const AppointmentComponent = (model: Appointments.AppointmentProps) => {
  const { bgColor, text, startDate, endDate } = model.data as IAppointment
  // const difference = (endDate.getTime() - startDate.getTime()) / 1000 / 60 // 약속 시간 분단위 반환.. 이후 % 계산할 때 쓸듯

  return (
    <AppointmentWrapper $bgColor={bgColor}>
      <Appointment>{text}</Appointment>
    </AppointmentWrapper>
  )
}
const currentDate = '2024-01-05'
const appointment: IAppointment[] = [
  {
    text: '기타 연습',
    startDate: new Date('2024-01-04T08:00:00.000'),
    endDate: new Date('2024-01-04T11:00:00.000'),
    bgColor: 'tomato',
  },
  {
    text: '프로젝트',
    startDate: new Date('2024-01-05T10:00:00.000'),
    endDate: new Date('2024-01-05T11:30:00.000'),
    bgColor: 'teal',
  },
]

export const Scheduler: FC<SchedulerProps> = ({ className }) => {
  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      console.log('added')
    }
    if (changed) {
      console.log('changed')
    }
    if (deleted) {
      console.log('deleted')
    }
  }
  return (
    <Root>
      <StyledScheduler data={appointment}>
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <ViewState currentDate={currentDate} />
        <WeekView startDayHour={5} endDayHour={24} cellDuration={60} />
        <Appointments appointmentComponent={AppointmentComponent} />
      </StyledScheduler>
    </Root>
  )
}
