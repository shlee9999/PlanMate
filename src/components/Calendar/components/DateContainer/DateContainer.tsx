import { Dispatch, FC, SetStateAction } from 'react'
import * as s from './styled'
import { AnimatePresence, Variants } from 'framer-motion'
import { dateUtils } from 'utils'
import { DateCell } from '..'
import { DateProps } from 'types'
import { ResponseStats } from 'api/types'
import { LegendContainer } from './LegendContainer/LegendContainer'

type DateContainerProps = {
  setSelectedDate: Dispatch<SetStateAction<DateProps>>
  selectedDateProps: DateProps
  blockFuture: boolean
  dataSource: ResponseStats[]
  back: boolean
  setBack: Dispatch<SetStateAction<boolean>>
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
  setBack,
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
          {Array.from(Array(dateUtils.getWeekCount(selectedDateProps.year, selectedDateProps.month)).keys()).map(
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
                      setBack={setBack}
                    />
                  ))}
              </s.WeekRow>
            )
          )}
          <LegendContainer legend={legend} />
        </s.DateContainer>
      </s.DateContainerWrapper>
    </AnimatePresence>
  )
}
