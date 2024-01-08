import React, { FC, useEffect, useState } from 'react'
import {
  AppointmentWrapper,
  ButtonWrapper,
  DataCell,
  DataCellRow,
  DateTypo,
  DayCell,
  DayTypo,
  NextButton,
  PrevButton,
  Root,
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { createArray, getWeekDates } from 'utils/helper'
import { updateInfo } from 'modules/selectedInfo'
import SubjectModal from '../SubjectModal'
import { updateAppoint } from 'modules/appointments'
import { defaultColor } from 'constants/color'
import { IAppointment } from 'types'
//직접 scheduler week view 구현
type SchedulerProps = {
  className?: string
  startHour?: number
  endHour?: number
}
const dayList = ['일', '월', '화', '수', '목', '금', '토']
export const Scheduler: FC<SchedulerProps> = ({ className, startHour = 5, endHour = 23 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { text, bgColor, id } = useSelector((state: RootState) => state.selectedInfo)
  const dispatch = useDispatch()
  const appointments = useSelector((state: RootState) => state.appointments)
  const now = new Date()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [modalTitle, setModalTitle] = useState('일정추가')
  const openModal = (title: '일정추가' | '일정수정') => {
    setModalTitle(title)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedCells([])
    setIsModalOpen(false)
    dispatch(
      updateInfo({
        startDate: new Date(),
        endDate: new Date(),
        text: '',
        bgColor: defaultColor,
        id: new Date().getTime(),
      })
    )
  }

  const onClickAppointment = (appoint: IAppointment) => () => {
    dispatch(
      updateInfo({
        ...appoint,
      })
    )
    openModal('일정수정')
  }
  useEffect(() => {
    if (selectedCells.length === 0) return
    const startHour = +selectedCells[0].split('T')[1]
    const endHour = +selectedCells[selectedCells.length - 1].split('T')[1] + 1
    const year = +selectedCells[0].slice(0, 4)
    const month = +selectedCells[0].slice(5, 7)
    const date = +selectedCells[0].slice(8, 10)
    dispatch(
      updateInfo({
        startDate: new Date(year, month, date, startHour),
        endDate: new Date(year, month, date, endHour),
        text,
        bgColor,
        id: new Date().getTime(),
      })
    )
  }, [selectedCells])

  return (
    <Root>
      <DataCellRow>
        <DayCell $today={null}></DayCell>
        {getWeekDates(currentDate).map((date, index) => (
          <DayCell $today={now.getDate() === currentDate.getDate() - (currentDate.getDay() - date)} key={date}>
            <>
              <DayTypo>{dayList[index]}</DayTypo>
              <DateTypo>{date.slice(-2)}</DateTypo>
            </>
          </DayCell>
        ))}
      </DataCellRow>
      {createArray(startHour, endHour).map((hour) => (
        <DataCellRow key={hour}>
          <DataCell $isSelected={false}>
            <p>{hour <= 12 ? `오전 ${hour}시` : `오후 ${hour - 12}시`}</p>
          </DataCell>
          {getWeekDates(currentDate).map((date) => (
            <DataCell
              key={date}
              $isSelected={selectedCells.includes(date + 'T' + hour)}
              onMouseDown={() => {
                setSelectedCells([date + 'T' + hour])
              }}
              onMouseEnter={(e) => {
                if (e.buttons === 1) {
                  if (
                    selectedCells.includes(date + 'T' + `${hour - 1}`) ||
                    selectedCells.includes(date + 'T' + `${hour + 1}`)
                  )
                    setSelectedCells((prev) => prev.concat(date + 'T' + hour))
                  else setSelectedCells([])
                }
              }}
              onMouseUp={() => openModal('일정추가')}
            >
              {appointments.map((app) => {
                const offset = new Date().getTimezoneOffset() * 60000
                const dateOffset = new Date(app.startDate.getTime() - offset)
                return (
                  dateOffset.toISOString().split('T')[0] === date &&
                  hour === app.startDate.getHours() && (
                    <AppointmentWrapper
                      key={app.id}
                      $bgColor={app.bgColor}
                      $height={
                        app.endDate.getHours() === 0
                          ? 24 - app.startDate.getHours()
                          : app.endDate.getHours() - app.startDate.getHours()
                      }
                      onClick={onClickAppointment(app)}
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      {app.text}
                    </AppointmentWrapper>
                  )
                )
              })}
            </DataCell>
          ))}
        </DataCellRow>
      ))}
      <ButtonWrapper>
        <PrevButton onClick={() => setCurrentDate(new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 7))} />
        {currentDate.getMonth() + 1}월
        <NextButton onClick={() => setCurrentDate(new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 7))} />
      </ButtonWrapper>
      <SubjectModal isModalOpen={isModalOpen} closeModal={closeModal} title={modalTitle} />
    </Root>
  )
}
