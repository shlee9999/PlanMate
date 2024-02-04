import { ResponseStats } from 'api/types'
import { useState } from 'react'
import { DateProps } from 'types'
import { dateUtils } from 'utils'

type useCalendarProps = {
  selectedDateProps: DateProps
  setSelectedDate: (date: DateProps) => void
  dataSource?: ResponseStats[]
  blockFuture?: boolean
  legend?: boolean
  headerButtonLayout?: 'space-between' | 'center'
  todayButton?: boolean
  yearHeader?: boolean
}

export const useCalendar = ({ setSelectedDate, selectedDateProps, blockFuture }: useCalendarProps) => {
  const [back, setBack] = useState(false)
  const onClickNextMonth = () => {
    const newDateProps = dateUtils.calculateDateProps(selectedDateProps, 'month', 1)
    if (blockFuture) {
      if (!dateUtils.isFuture(newDateProps)) {
        setSelectedDate(newDateProps)
        setBack(false)
      }
    } else {
      setSelectedDate(newDateProps)
      setBack(false)
    }
  }
  const onClickPrevMonth = () => {
    setSelectedDate(dateUtils.calculateDateProps(selectedDateProps, 'month', -1))
    setBack(true)
  }
  const onClickNextYear = () => {
    const newDateProps = dateUtils.calculateDateProps(selectedDateProps, 'year', 1)
    if (blockFuture) {
      if (!dateUtils.isFuture(newDateProps)) {
        setSelectedDate(newDateProps)
        setBack(false)
      }
    } else {
      setSelectedDate(newDateProps)
      setBack(false)
    }
  }
  const onClickPrevYear = () => {
    setSelectedDate(dateUtils.calculateDateProps(selectedDateProps, 'year', 1))
    setBack(true)
  }
  const onClickToday = () => setSelectedDate(dateUtils.getDateProps(new Date()))
  const todayDateProps = dateUtils.getTodayDateProps()
  return {
    back,
    onClickNextMonth,
    onClickPrevMonth,
    onClickNextYear,
    onClickPrevYear,
    onClickToday,
    todayDateProps,
  }
}
