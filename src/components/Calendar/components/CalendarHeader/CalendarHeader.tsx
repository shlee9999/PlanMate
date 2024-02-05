import * as s from './styled'
import { Dispatch, SetStateAction } from 'react'
import { useCalendarHeader } from './useCalendarHeader'

type CalendarHeaderProps = {
  yearHeader: boolean
  todayButton: boolean
  headerButtonLayout: 'space-between' | 'center'
  blockFuture: boolean
  setBack: Dispatch<SetStateAction<boolean>>
}

export const CalendarHeader = ({
  yearHeader,
  todayButton,
  headerButtonLayout,
  blockFuture,
  setBack,
}: CalendarHeaderProps) => {
  const {
    onClickNextMonth,
    onClickPrevMonth,
    onClickNextYear,
    onClickPrevYear,
    onClickToday,
    todayDateProps,
    selectedYear,
    selectedMonth,
  } = useCalendarHeader({
    blockFuture,
    setBack,
  })
  return (
    <>
      {yearHeader && (
        <s.YearHeader>
          <s.PrevButton onClick={onClickPrevYear} />
          <s.Month $layout={headerButtonLayout} key={selectedMonth}>
            {selectedYear}
          </s.Month>
          <s.NextButton onClick={onClickNextYear} />
          {todayButton && <s.TodayButton onClick={onClickToday}>Today</s.TodayButton>}
        </s.YearHeader>
      )}
      <s.MonthHeader $layout={headerButtonLayout}>
        <s.PrevButton onClick={onClickPrevMonth} />
        <s.Month $layout={headerButtonLayout} key={selectedMonth}>
          {selectedMonth}월
        </s.Month>
        {(!blockFuture ||
          selectedYear < todayDateProps.year ||
          (selectedYear === todayDateProps.year && selectedMonth < todayDateProps.month)) && (
          <s.NextButton onClick={onClickNextMonth} />
        )}
        {todayButton && <s.TodayButton onClick={onClickToday}>Today</s.TodayButton>}
      </s.MonthHeader>
    </>
  )
}
