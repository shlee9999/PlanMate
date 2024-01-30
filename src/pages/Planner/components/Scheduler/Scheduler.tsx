import * as s from './styled'
import React, { FC, useState } from 'react'
import { dateUtils } from 'utils'
import { numberUtils } from 'utils'
import { AnimatePresence } from 'framer-motion'
import { weekDays } from 'constants/week'
import { Appointment, SelectModal } from '..'
import { usePlannerData, useSelectModal, useMouseInteraction } from './hooks'

type SchedulerProps = {
  className?: string
  startHour?: number
  endHour?: number
}

export const Scheduler: FC<SchedulerProps> = ({ className, startHour = 5, endHour = 23 }) => {
  const now = new Date()
  const { plannerData, isPlannerLoading } = usePlannerData()
  const [currentDate, setCurrentDate] = useState(now)
  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [modalType, setModalType] = useState<'ADD' | 'EDIT'>('ADD')
  const { isSelectModalOpen, openAddModal, openEditModal, closeModal, onExitComplete } = useSelectModal({
    setModalType,
    initializeSelectedCells: () => setSelectedCells([]),
  })
  const { onMouseDown, onMouseEnter, onMouseUp } = useMouseInteraction({
    selectedCells,
    setSelectedCells,
    openModal: modalType === 'ADD' ? openAddModal : openEditModal,
  })

  return (
    <s.Root className={className}>
      <s.ButtonWrapper>
        <s.PrevButton onClick={() => setCurrentDate(new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 7))} />
        {currentDate.getMonth() + 1}월
        <s.NextButton onClick={() => setCurrentDate(new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 7))} />
      </s.ButtonWrapper>
      <s.Table>
        <s.TableBody>
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
                            height={
                              app.endAt.slice(0, 2) === '00'
                                ? 24 - +app.startAt.slice(0, 2)
                                : +app.endAt.slice(0, 2) - +app.startAt.slice(0, 2)
                            }
                            onMouseDown={(e) => e.stopPropagation()}
                            appoint={app}
                            openModal={openEditModal}
                          />
                        )
                      )
                    })}
                  </AnimatePresence>
                </s.DataCell>
              ))}
            </s.DataCellRow>
          ))}
        </s.TableBody>
      </s.Table>
      <SelectModal
        closeModal={closeModal}
        type={modalType}
        isOpen={isSelectModalOpen}
        onExitComplete={onExitComplete}
      />
    </s.Root>
  )
}
