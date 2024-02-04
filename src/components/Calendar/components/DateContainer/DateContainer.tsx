import { Dispatch, FC, SetStateAction } from 'react'
import * as s from './styled'
import { AnimatePresence, Variants } from 'framer-motion'
import { dateUtils } from 'utils'
import { DateCell } from '..'
import { DateProps } from 'types'
import { ResponseStats } from 'api/types'

type DateContainerProps = {
  setSelectedDate: Dispatch<SetStateAction<DateProps>>
  selectedDateProps: DateProps
  blockFuture: boolean
  dataSource: ResponseStats[]
  back: boolean
  legend: boolean
}
const momentum = 100
const DateContainerVar: Variants = {
  initial: (back: boolean) => ({ opacity: 0, x: back ? -momentum : momentum }),
  visible: { opacity: 1, x: 0 },
  exit: (back: boolean) => ({ opacity: 0, x: back ? momentum : -momentum }),
}
export const DateContainer: FC<DateContainerProps> = ({
  setSelectedDate,
  selectedDateProps,
  back,
  blockFuture,
  dataSource,
  legend,
}) => {
  return (
    <AnimatePresence initial={false}>
      <s.DateContainerWrapper>
        <s.DateContainer
          key={selectedDateProps.year + '' + selectedDateProps.month}
          variants={DateContainerVar}
          initial="initial"
          animate="visible"
          transition={{ duration: 0.5 }}
          custom={back}
        >
          {Array.from(Array(dateUtils.getWeekCount(selectedDateProps.year, selectedDateProps.month + 1)).keys()).map(
            (week) => (
              <s.WeekRow key={week}>
                {dateUtils
                  .getWeekDates({ year: selectedDateProps.year, month: selectedDateProps.month, date: week * 7 + 1 })
                  .map((date, index) => (
                    <DateCell
                      key={index}
                      setSelectedDate={() => setSelectedDate(date)}
                      cellDateProps={date}
                      studyTimeHours={
                        date.date - 1 < dataSource.length ? dataSource[date.date - 1].totalStudyTimeHours : 0
                      }
                      selectedDate={selectedDateProps}
                      blockFuture={blockFuture}
                    />
                  ))}
              </s.WeekRow>
            )
          )}
          {legend && (
            <s.LegendContainer>
              <s.Legend>
                <s.Circle />
                0~3시간
              </s.Legend>
              <s.Legend>
                <s.Circle />
                4~7시간
              </s.Legend>
              <s.Legend>
                <s.Circle />
                8~11시간
              </s.Legend>
              <s.Legend>
                <s.Circle />
                12시간 이상
              </s.Legend>
            </s.LegendContainer>
          )}
        </s.DateContainer>
      </s.DateContainerWrapper>
    </AnimatePresence>
  )
}
