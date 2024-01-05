import { FC, useEffect, useState } from 'react'
import { Appointment, AppointmentWrapper, Root, StyledScheduler } from './styled'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
import { AppointmentForm, Appointments, WeekView } from '@devexpress/dx-react-scheduler-material-ui'
import { IAppointment } from 'types'
import { useDispatch, useSelector } from 'react-redux'
import { addAppoint, removeAppoint } from 'modules/appointments'
import { RootState } from 'modules'

type SchedulerProps = {
  className?: string
}

const currentDate = '2024-01-05'

export const Scheduler: FC<SchedulerProps> = ({ className }) => {
  const dispatch = useDispatch()
  const appointments = useSelector((state: RootState) => state.appointments)

  const AppointmentComponent = (model: Appointments.AppointmentProps) => {
    const { bgColor, text, startDate, endDate } = model.data as IAppointment
    // const difference = (endDate.getTime() - startDate.getTime()) / 1000 / 60 // 약속 시간 분단위 반환.. 이후 % 계산할 때 쓸듯
    return (
      <AppointmentWrapper $bgColor={bgColor} onClick={delAppointment(startDate)}>
        <Appointment>{text}</Appointment>
      </AppointmentWrapper>
    )
  }

  const delAppointment = (startDate: Date) => () => {
    dispatch(removeAppoint(startDate))
  }

  return (
    <Root>
      <StyledScheduler data={appointments}>
        <ViewState currentDate={currentDate} />
        <WeekView startDayHour={5} endDayHour={24} cellDuration={60} />
        <Appointments appointmentComponent={AppointmentComponent} />
      </StyledScheduler>
    </Root>
  )
}
