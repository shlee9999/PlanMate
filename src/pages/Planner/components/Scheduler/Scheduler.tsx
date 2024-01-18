import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { compareTime, createArray, getWeekDates, getYYYYMMDD, useFormattedTime } from 'utils/helper'
import { updateInfo } from 'modules/selectedInfo'
import { initializeAppoint, removeAppoint, updateAppoint } from 'modules/appointments'
import { defaultColor } from 'constants/color'
import { PlannerType } from 'types'
import { AnimatePresence } from 'framer-motion'
import { weekDays } from 'constants/week'
import { useQuery } from 'react-query'
import { FindPlannerResponseProps, findPlanner } from 'api/planner/findPlanner'
import { Appointment, SelectModal } from '..'
import { useRemoveAppointMutation } from '../../hooks/mutations'
import * as s from './styled'
//직접 scheduler week view 구현
type SchedulerProps = {
  className?: string
  startHour?: number
  endHour?: number
}

export const Scheduler: FC<SchedulerProps> = ({ className, startHour = 5, endHour = 23 }) => {
  const { data, isLoading } = useQuery<FindPlannerResponseProps>(['plannerData'], () => findPlanner(), {
    initialData: [],
    keepPreviousData: true,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scheduleName: text, colorHex: bgColor } = useSelector((state: RootState) => state.selectedInfo)
  const dispatch = useDispatch()
  const appointments = useSelector((state: RootState) => state.appointments)
  const now = new Date()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [modalTitle, setModalTitle] = useState('일정추가')
  const mutateRemoveAppoint = useRemoveAppointMutation()
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

  const onClickAppointment = (appoint: PlannerType) => () => {
    dispatch(
      updateInfo({
        ...appoint,
      })
    )
    openModal('일정수정')
  }
  const onMouseUp = () => {
    if (selectedCells.length === 0) return
    const startTime = +selectedCells[0].split('T')[1] * 60 * 60
    const endTime = (+selectedCells[selectedCells.length - 1].split('T')[1] + 1) * 60 * 60
    const { smaller, larger } = compareTime(startTime, endTime)
    const startHour = useFormattedTime(smaller)
    const endHour = useFormattedTime(larger)
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
  const onMouseEnter = (date, hour) => (e) => {
    if (e.buttons !== 1) return
    if (
      (selectedCells.includes(getYYYYMMDD(date) + 'T' + `${hour - 1}`) &&
        !selectedCells.includes(getYYYYMMDD(date) + 'T' + `${hour + 1}`)) ||
      (selectedCells.includes(getYYYYMMDD(date) + 'T' + `${hour + 1}`) &&
        !selectedCells.includes(getYYYYMMDD(date) + 'T' + `${hour - 1}`))
    )
      setSelectedCells((prev) => prev.concat(getYYYYMMDD(date) + 'T' + hour))
    else setSelectedCells([])
  }

  const onMouseDown = (date, hour) => () => setSelectedCells([getYYYYMMDD(date) + 'T' + hour])

  return (
    <s.Root>
      <s.ButtonWrapper>
        <s.PrevButton onClick={() => setCurrentDate(new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 7))} />
        {currentDate.getMonth() + 1}월
        <s.NextButton onClick={() => setCurrentDate(new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 7))} />
      </s.ButtonWrapper>
      <SelectModal closeModal={closeModal} title={modalTitle} isOpen={isModalOpen} onExitComplete={onExitComplete} />
      <s.Table>
        <tbody>
          <s.DataCellRow>
            <s.DayCell $today={null}></s.DayCell>
            {getWeekDates(currentDate).map((date, index) => (
              <s.DayCell $today={getYYYYMMDD(now) === getYYYYMMDD(date)} key={getYYYYMMDD(date)}>
                <s.DayTypo>{weekDays[index]}</s.DayTypo>
                <s.DateTypo>{getYYYYMMDD(date).slice(-2)}</s.DateTypo>
              </s.DayCell>
            ))}
          </s.DataCellRow>
          {createArray(startHour, endHour).map((hour) => (
            <s.DataCellRow key={hour}>
              <s.DataCell $hour={hour}>
                <p>{hour <= 12 ? `오전 ${hour}시` : `오후 ${hour - 12}시`}</p>
              </s.DataCell>
              {getWeekDates(currentDate).map((date) => (
                <s.DataCell
                  key={getYYYYMMDD(date)}
                  $isSelected={selectedCells.includes(getYYYYMMDD(date) + 'T' + hour)}
                  $hour={hour}
                  onMouseDown={onMouseDown(date, hour)}
                  onMouseEnter={onMouseEnter(date, hour)}
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
                </s.DataCell>
              ))}
            </s.DataCellRow>
          ))}
        </tbody>
      </s.Table>
    </s.Root>
  )
}
