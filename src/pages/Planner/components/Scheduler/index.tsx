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
import { createArray, getDateSaveForm, getWeekDates, getYYYYMMDD } from 'utils/helper'
import { updateInfo } from 'modules/selectedInfo'

import { initializeAppoint, removeAppoint, updateAppoint } from 'modules/appointments'
import { defaultColor } from 'constants/color'
import { IAppointment } from 'types'
import { SelectModal } from '../SelectModal'
import { Appointment } from '../Appointment'
import { AnimatePresence } from 'framer-motion'
import { weekDays } from 'constants/week'
import { useQuery } from 'react-query'
import { FindPlannerResponseProps, findPlanner } from 'api/planner/findPlanner'
//직접 scheduler week view 구현
type SchedulerProps = {
  className?: string
  startHour?: number
  endHour?: number
}

export const Scheduler: FC<SchedulerProps> = ({ className, startHour = 5, endHour = 23 }) => {
  const { data, isLoading } = useQuery<FindPlannerResponseProps>(['plannerData'], () => findPlanner())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scheduleName: text, colorHex: bgColor, id } = useSelector((state: RootState) => state.selectedInfo)
  const dispatch = useDispatch()
  const appointments = useSelector((state: RootState) => state.appointments)
  const now = new Date()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [modalTitle, setModalTitle] = useState('일정추가')
  const onClickClose = (id: string) => (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(removeAppoint(id))
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
        startDate: new Date(),
        endDate: new Date(),
        scheduleName: '',
        colorHex: defaultColor,
        id: new Date().getTime() + '',
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
    const startHour = +selectedCells[0].split('T')[1]
    const endHour = +selectedCells[selectedCells.length - 1].split('T')[1] + 1
    const year = selectedCells[0].slice(0, 4)
    const month = selectedCells[0].slice(4, 6)
    const date = selectedCells[0].slice(6, 8)

    dispatch(
      updateInfo({
        startDate: new Date(+year, +month, +date, startHour),
        endDate: new Date(+year, +month, +date, endHour),
        scheduleName: text,
        colorHex: bgColor,
        id: new Date().getTime() + '', // tempId
        day: year + '-' + month + '-' + date, // YYYY-MM-DD
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
              <DayCell $today={getDateSaveForm(now) === getDateSaveForm(date)} key={getDateSaveForm(date)}>
                <>
                  <DayTypo>{weekDays[index]}</DayTypo>
                  <DateTypo>{getDateSaveForm(date).slice(-2)}</DateTypo>
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
                  key={getDateSaveForm(date)}
                  $isSelected={selectedCells.includes(getDateSaveForm(date) + 'T' + hour)}
                  $hour={hour}
                  onMouseDown={() => {
                    setSelectedCells([getDateSaveForm(date) + 'T' + hour])
                  }}
                  onMouseEnter={(e) => {
                    if (e.buttons === 1) {
                      if (
                        selectedCells.includes(getDateSaveForm(date) + 'T' + `${hour - 1}`) ||
                        selectedCells.includes(getDateSaveForm(date) + 'T' + `${hour + 1}`)
                      )
                        setSelectedCells((prev) => prev.concat(getDateSaveForm(date) + 'T' + hour))
                      else setSelectedCells([])
                    }
                  }}
                  onMouseUp={onMouseUp}
                >
                  <AnimatePresence>
                    {appointments.map((app) => {
                      return (
                        getDateSaveForm(app.startDate) === getDateSaveForm(date) &&
                        hour === app.startDate.getHours() && (
                          <Appointment
                            key={app.id}
                            id={app.id}
                            title={app.scheduleName}
                            bgColor={app.colorHex}
                            height={
                              app.endDate.getHours() === 0
                                ? 24 - app.startDate.getHours()
                                : app.endDate.getHours() - app.startDate.getHours()
                            }
                            onClick={onClickAppointment(app)}
                            onMouseDown={(e) => e.stopPropagation()}
                            onClickClose={onClickClose(app.id)}
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
