import * as s from './styled'
import { Dispatch, FC, SetStateAction } from 'react'
import { DateProps } from 'types'
import { useCalendarHeader } from './useCalendarHeader'

type CalendarHeaderProps = {
  yearHeader: boolean
  todayButton: boolean
  selectedDateProps: DateProps
  headerButtonLayout: 'space-between' | 'center'
  blockFuture: boolean
  setSelectedDate: Dispatch<SetStateAction<DateProps>>
  setBack: Dispatch<SetStateAction<boolean>>
}

export const CalendarHeader: FC<CalendarHeaderProps> = ({
  yearHeader,
  todayButton,
  selectedDateProps,
  headerButtonLayout,
  blockFuture,
  setSelectedDate,
  setBack,
}) => {
  const { onClickNextMonth, onClickPrevMonth, onClickNextYear, onClickPrevYear, onClickToday, todayDateProps } =
    useCalendarHeader({
      setSelectedDate,
      blockFuture,
      selectedDateProps,
      setBack,
    })
  return (
    <>
      {yearHeader && (
        <s.YearHeader>
          <s.PrevButton onClick={onClickPrevYear} />
          <s.Month $layout={headerButtonLayout} key={selectedDateProps.month}>
            {selectedDateProps.year}
          </s.Month>
          <s.NextButton onClick={onClickNextYear} />
          {todayButton && <s.TodayButton onClick={onClickToday}>Today</s.TodayButton>}
        </s.YearHeader>
      )}
      <s.MonthHeader $layout={headerButtonLayout}>
        <s.PrevButton onClick={onClickPrevMonth} />
        <s.Month $layout={headerButtonLayout} key={selectedDateProps.month}>
          {selectedDateProps.month}월
        </s.Month>
        {(!blockFuture ||
          selectedDateProps.year < new Date().getFullYear() ||
          (selectedDateProps.year === new Date().getFullYear() && selectedDateProps.month < todayDateProps.month)) && (
          <s.NextButton onClick={onClickNextMonth} />
        )}
        {todayButton && <s.TodayButton onClick={onClickToday}>Today</s.TodayButton>}
      </s.MonthHeader>
    </>
  )
}
