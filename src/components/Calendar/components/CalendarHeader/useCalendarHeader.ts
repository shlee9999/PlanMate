import { Dispatch, SetStateAction } from 'react'
import { DateProps } from 'types'
import { dateUtils } from 'utils'

type useHeaderButtonProps = {
  selectedDateProps: DateProps
  setSelectedDate: Dispatch<SetStateAction<DateProps>>
  blockFuture: boolean
  setBack: Dispatch<SetStateAction<boolean>>
}

export const useCalendarHeader = ({
  setSelectedDate,
  blockFuture,
  selectedDateProps,
  setBack,
}: useHeaderButtonProps) => {
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
    setSelectedDate(dateUtils.calculateDateProps(selectedDateProps, 'year', -1))
    setBack(true)
  }
  const onClickToday = () => setSelectedDate(dateUtils.getDateProps(new Date()))
  const todayDateProps = dateUtils.getTodayDateProps()
  return {
    onClickNextMonth,
    onClickPrevMonth,
    onClickNextYear,
    onClickPrevYear,
    onClickToday,
    todayDateProps,
  }
}
