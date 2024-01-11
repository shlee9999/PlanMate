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
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { createArray, getDateSaveForm, getWeekDates } from 'utils/helper'
import { updateInfo } from 'modules/selectedInfo'

import { removeAppoint, updateAppoint } from 'modules/appointments'
import { defaultColor } from 'constants/color'
import { IAppointment } from 'types'
import { SelectModal } from '../SelectModal'
import { Appointment } from '../Appointment'
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
  const onClickClose = (id: number) => (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(removeAppoint(id))
  }
  const openModal = (title: '일정추가' | '일정수정') => {
    setModalTitle(title)
    setIsModalOpen(true)
  }

  const onExitComplete = () => {
    // modal 종료 애니메이션 대기
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
    const year = +selectedCells[0].slice(0, 4)
    const month = +selectedCells[0].slice(4, 6)
    const date = +selectedCells[0].slice(6, 8)

    dispatch(
      updateInfo({
        startDate: new Date(year, month, date, startHour),
        endDate: new Date(year, month, date, endHour),
        text,
        bgColor,
        id: new Date().getTime(),
      })
    )
    openModal('일정추가')
  }

  return (
    <Root>
      <DataCellRow>
        <DayCell $today={null}></DayCell>
        {getWeekDates(currentDate).map((date, index) => (
          <DayCell $today={getDateSaveForm(now) === getDateSaveForm(date)} key={getDateSaveForm(date)}>
            <>
              <DayTypo>{dayList[index]}</DayTypo>
              <DateTypo>{getDateSaveForm(date).slice(-2)}</DateTypo>
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
              key={getDateSaveForm(date)}
              $isSelected={selectedCells.includes(getDateSaveForm(date) + 'T' + hour)}
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
              {appointments.map((app) => {
                return (
                  getDateSaveForm(app.startDate) === getDateSaveForm(date) &&
                  hour === app.startDate.getHours() && (
                    <Appointment
                      key={app.id}
                      title={app.text}
                      bgColor={app.bgColor}
                      height={
                        app.endDate.getHours() === 0
                          ? 24 - app.startDate.getHours()
                          : app.endDate.getHours() - app.startDate.getHours()
                      }
                      onClick={onClickAppointment(app)}
                      onMouseDown={(e) => e.stopPropagation()}
                    />
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
      <SelectModal closeModal={closeModal} title={modalTitle} isOpen={isModalOpen} onExitComplete={onExitComplete} />
    </Root>
  )
}
