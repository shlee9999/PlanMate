import * as s from './styled'
import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { dateUtils } from 'utils'
import { numberUtils } from 'utils'
import { updateInfo } from 'modules/selectedInfo'
import { removeAppoint } from 'modules/appointments'
import { defaultColor } from 'constants/color'
import { PlannerType } from 'api/types'
import { AnimatePresence } from 'framer-motion'
import { weekDays } from 'constants/week'
import { Appointment, SelectModal } from '..'
import { useRemoveAppointMutation } from '../../hooks/mutations'
import { useModal } from 'hooks'
import { useMouseInteraction } from './hooks/useMouseInteraction'
import { usePlannerData } from './hooks/usePlannerData'

type SchedulerProps = {
  className?: string
  startHour?: number
  endHour?: number
}

export const Scheduler: FC<SchedulerProps> = ({ className, startHour = 5, endHour = 23 }) => {
  const dispatch = useDispatch()
  const { plannerData, isPlannerLoading } = usePlannerData()
  const { isOpen: isSelectModalOpen, closeModal: closeSelectModal, openModal: openSelectModal } = useModal()
  const now = new Date()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [modalTitle, setModalTitle] = useState('일정추가')
  const mutateRemoveAppoint = useRemoveAppointMutation()
  const onClickClose = (id: number) => (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(removeAppoint(id))
    mutateRemoveAppoint({ plannerId: id })
  }
  const openModal = (title: '일정추가' | '일정수정') => {
    setModalTitle(title)
    openSelectModal()
  }
  const closeModal = () => {
    closeSelectModal()
    setSelectedCells([])
  }
  const { onMouseDown, onMouseEnter, onMouseUp } = useMouseInteraction({ selectedCells, setSelectedCells, openModal })

  const onExitComplete = () => {
    // modal 종료 애니메이션 대기
    dispatch(
      updateInfo({
        startAt: '00',
        endAt: '00',
        scheduleName: '',
        colorHex: defaultColor,
        plannerId: new Date().getTime(),
        day: dateUtils.getYYYYMMDD(new Date()),
      })
    )
  }

  const onClickAppointment = (appoint: PlannerType) => () => {
    dispatch(
      updateInfo({
        ...appoint,
      })
    )
    openModal('일정수정')
  }

  return (
    <s.Root className={className}>
      <s.ButtonWrapper>
        <s.PrevButton onClick={() => setCurrentDate(new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 7))} />
        {currentDate.getMonth() + 1}월
        <s.NextButton onClick={() => setCurrentDate(new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 7))} />
      </s.ButtonWrapper>
      <s.Table>
        <tbody>
          <s.DataCellRow>
            <s.DayCell $today={null}></s.DayCell>
            {dateUtils.getWeekDates(currentDate).map((date, index) => (
              <s.DayCell
                $today={dateUtils.getYYYYMMDD(now) === dateUtils.getYYYYMMDD(date)}
                key={dateUtils.getYYYYMMDD(date)}
              >
                <s.DayTypo>{weekDays[index]}</s.DayTypo>
                <s.DateTypo>{dateUtils.getYYYYMMDD(date).slice(-2)}</s.DateTypo>
              </s.DayCell>
            ))}
          </s.DataCellRow>
          {numberUtils.createSequentialNumbers(startHour, endHour).map((hour) => (
            <s.DataCellRow key={hour}>
              <s.DataCell $hour={hour + ''}>
                <p>{hour <= 12 ? `오전 ${hour}시` : `오후 ${hour - 12}시`}</p>
              </s.DataCell>
              {dateUtils.getWeekDates(currentDate).map((date) => (
                <s.DataCell
                  key={dateUtils.getYYYYMMDD(date)}
                  $isSelected={selectedCells.includes(dateUtils.getYYYYMMDD(date) + 'T' + hour)}
                  $hour={hour + ''}
                  onMouseDown={onMouseDown(date, hour)}
                  onMouseEnter={onMouseEnter(date, hour)}
                  onMouseUp={onMouseUp}
                >
                  <AnimatePresence>
                    {plannerData.map((app) => {
                      return (
                        app.day === dateUtils.getYYYYMMDD(date) &&
                        hour === +app.startAt.slice(0, 2) &&
                        !isPlannerLoading && (
                          <Appointment
                            key={app.plannerId}
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
      <SelectModal
        closeModal={closeModal}
        title={modalTitle}
        isOpen={isSelectModalOpen}
        onExitComplete={onExitComplete}
      />
    </s.Root>
  )
}
