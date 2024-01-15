import React, { FC, useEffect, useState } from 'react'
import {
  ButtonWrapper,
  DataCell,
  DataCellRow,
  DateTypo,
  DayCell,
  DayTypo,
  NextButton,
  PrevButton,
  Root,
  Table,
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { createArray, getWeekDates, getYYYYMMDD, useFormattedTime } from 'utils/helper'
import { updateInfo } from 'modules/selectedInfo'

import { initializeAppoint, removeAppoint, updateAppoint } from 'modules/appointments'
import { defaultColor } from 'constants/color'
import { IAppointment } from 'types'
import { SelectModal } from '../SelectModal'

import { AnimatePresence } from 'framer-motion'
import { weekDays } from 'constants/week'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { FindPlannerResponseProps, findPlanner } from 'api/planner/findPlanner'
import { removePlanner } from 'api/planner/removePlanner'
import { Appointment } from '../Appointment'
//직접 scheduler week view 구현
type SchedulerProps = {
  className?: string
  startHour?: number
  endHour?: number
}

export const Scheduler: FC<SchedulerProps> = ({ className, startHour = 5, endHour = 23 }) => {
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery<FindPlannerResponseProps>(['plannerData'], () => findPlanner(), {
    initialData: [],
    keepPreviousData: true,
  })
  const { mutate: mutateRemoveAppoint } = useMutation((plannerId: number) => removePlanner({ plannerId }), {
    onMutate: async (plannerId) => {
      const previousAppointments = queryClient.getQueryData<FindPlannerResponseProps>(['plannerData'])
      queryClient.setQueryData<FindPlannerResponseProps>(['plannerData'], (old) =>
        old.filter((app) => app.plannerId !== plannerId)
      )
      return { previousAppointments }
    },
    onError: (err, plannerId, context) => {
      queryClient.setQueryData(['plannerData'], context.previousAppointments)
    },
    onSuccess: () => {
      console.log('Remove planner successful')
    },
    onSettled: () => {
      queryClient.invalidateQueries(['plannerData'])
    },
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scheduleName: text, colorHex: bgColor, plannerId: id } = useSelector((state: RootState) => state.selectedInfo)
  const dispatch = useDispatch()
  const appointments = useSelector((state: RootState) => state.appointments)
  const now = new Date()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [modalTitle, setModalTitle] = useState('일정추가')

  dispatch(initializeAppoint(data))
  const onClickClose = (id: number) => (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(removeAppoint(id))
    mutateRemoveAppoint(id)
  }
  const openModal = (title: '일정추가' | '일정수정') => {
    setModalTitle(title)
    setIsModalOpen(true)
  }
  // dispatch(initializeAppoint(data.map((app) => ({}))))
  const onExitComplete = () => {
    // modal 종료 애니메이션 대기
    dispatch(
      updateInfo({
        startAt: '00',
        endAt: '00',
        scheduleName: '',
        colorHex: defaultColor,
        plannerId: new Date().getTime(),
        day: getYYYYMMDD(new Date()),
      })
    )
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCells([])
  }

  const onClickAppointment = (appoint: IAppointment) => () => {
    dispatch(
      updateInfo({
        ...appoint,
      })
    )
    openModal('일정수정')
  }
  const onMouseUp = () => {
    if (selectedCells.length === 0) return
    const startHour = useFormattedTime(+selectedCells[0].split('T')[1] * 60 * 60)
    const endHour = useFormattedTime((+selectedCells[selectedCells.length - 1].split('T')[1] + 1) * 60 * 60)
    const year = +selectedCells[0].slice(0, 4)
    const month = +selectedCells[0].slice(5, 7)
    const date = +selectedCells[0].slice(8, 10)
    dispatch(
      updateInfo({
        startAt: startHour,
        endAt: endHour,
        scheduleName: text,
        colorHex: bgColor,
        plannerId: new Date().getTime(), // tempId
        day: getYYYYMMDD({
          year,
          month,
          date,
        }), // YYYY-MM-DD
      })
    )
    openModal('일정추가')
  }

  return (
    <Root>
      <ButtonWrapper>
        <PrevButton onClick={() => setCurrentDate(new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 7))} />
        {currentDate.getMonth() + 1}월
        <NextButton onClick={() => setCurrentDate(new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 7))} />
      </ButtonWrapper>
      <SelectModal closeModal={closeModal} title={modalTitle} isOpen={isModalOpen} onExitComplete={onExitComplete} />
      <Table>
        <tbody>
          <DataCellRow>
            <DayCell $today={null}></DayCell>
            {getWeekDates(currentDate).map((date, index) => (
              <DayCell $today={getYYYYMMDD(now) === getYYYYMMDD(date)} key={getYYYYMMDD(date)}>
                <>
                  <DayTypo>{weekDays[index]}</DayTypo>
                  <DateTypo>{getYYYYMMDD(date).slice(-2)}</DateTypo>
                </>
              </DayCell>
            ))}
          </DataCellRow>
          {createArray(startHour, endHour).map((hour) => (
            <DataCellRow key={hour}>
              <DataCell $hour={hour}>
                <p>{hour <= 12 ? `오전 ${hour}시` : `오후 ${hour - 12}시`}</p>
              </DataCell>
              {getWeekDates(currentDate).map((date) => (
                <DataCell
                  key={getYYYYMMDD(date)}
                  $isSelected={selectedCells.includes(getYYYYMMDD(date) + 'T' + hour)}
                  $hour={hour}
                  onMouseDown={() => {
                    setSelectedCells([getYYYYMMDD(date) + 'T' + hour])
                  }}
                  onMouseEnter={(e) => {
                    if (e.buttons === 1) {
                      if (
                        selectedCells.includes(getYYYYMMDD(date) + 'T' + `${hour - 1}`) ||
                        selectedCells.includes(getYYYYMMDD(date) + 'T' + `${hour + 1}`)
                      )
                        setSelectedCells((prev) => prev.concat(getYYYYMMDD(date) + 'T' + hour))
                      else setSelectedCells([])
                    }
                  }}
                  onMouseUp={onMouseUp}
                >
                  <AnimatePresence>
                    {appointments.map((app) => {
                      return (
                        app.day === getYYYYMMDD(date) &&
                        hour === +app.startAt.slice(0, 2) &&
                        !isLoading && (
                          <Appointment
                            key={app.plannerId}
                            id={app.plannerId}
                            title={app.scheduleName}
                            bgColor={app.colorHex}
                            height={
                              app.endAt.slice(0, 2) === '00'
                                ? 24 - +app.startAt.slice(0, 2)
                                : +app.endAt.slice(0, 2) - +app.startAt.slice(0, 2)
                            }
                            onClick={onClickAppointment(app)}
                            onMouseDown={(e) => e.stopPropagation()}
                            onClickClose={onClickClose(app.plannerId)}
                          />
                        )
                      )
                    })}
                  </AnimatePresence>
                </DataCell>
              ))}
            </DataCellRow>
          ))}
        </tbody>
      </Table>
    </Root>
  )
}
