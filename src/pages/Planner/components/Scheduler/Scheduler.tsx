import * as s from './styled'
import React, { FC } from 'react'
import { dateUtils } from 'utils'
import { numberUtils } from 'utils'
import { AnimatePresence } from 'framer-motion'
import { weekDays } from 'constants/week'
import { Appointment, SelectModal } from '..'
import { useScheduler } from './useScheduler'

type SchedulerProps = {
  className?: string
  startHour?: number
  endHour?: number
}

export const Scheduler: FC<SchedulerProps> = ({ className, startHour = 5, endHour = 23 }) => {
  const {
    plannerData,
    isPlannerLoading,
    selectedDateProps,
    setSelectedDateProps,
    isSelectModalOpen,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    closeModal,
    onExitComplete,
    selectedCells,
    modalType,
    openEditModal,
    todayDateProps,
  } = useScheduler()
  return (
    <s.Scheduler className={className}>
      <s.ButtonWrapper>
        <s.PrevButton
          onClick={() => setSelectedDateProps(dateUtils.calculateDateProps(selectedDateProps, 'date', -7))}
        />
        {selectedDateProps.month}월
        <s.NextButton
          onClick={() => setSelectedDateProps(dateUtils.calculateDateProps(selectedDateProps, 'date', 7))}
        />
      </s.ButtonWrapper>
      <s.Table>
        <s.TableBody>
          <s.DataCellRow>
            <s.DayCell $today={null}></s.DayCell>
            {dateUtils.getWeekDates(selectedDateProps).map((date, index) => (
              <s.DayCell
                $today={dateUtils.getYYYYMMDD(todayDateProps) === dateUtils.getYYYYMMDD(date)}
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
              {dateUtils.getWeekDates(selectedDateProps).map((date) => (
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
    </s.Scheduler>
  )
}
