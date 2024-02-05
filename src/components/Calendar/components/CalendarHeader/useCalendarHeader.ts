import { RootState } from 'modules'
import { updateSelectedDate } from 'modules/selectedDate'
import { Dispatch, SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateUtils } from 'utils'

type useHeaderButtonProps = {
  blockFuture: boolean
  setBack: Dispatch<SetStateAction<boolean>>
}

export const useCalendarHeader = ({ blockFuture, setBack }: useHeaderButtonProps) => {
  const dispatch = useDispatch()
  const selectedDateProps = useSelector((state: RootState) => state.selectedDate)
  const onClickNextMonth = () => {
    const newDateProps = dateUtils.calculateDateProps(selectedDateProps, 'month', 1)
    if (blockFuture) {
      if (!dateUtils.isFuture(newDateProps)) {
        dispatch(updateSelectedDate(newDateProps))
        setBack(false)
      } else {
        dispatch(updateSelectedDate({ ...newDateProps, date: dateUtils.getTodayDateProps().date }))
      }
    } else {
      dispatch(updateSelectedDate(newDateProps))
      setBack(false)
    }
  }
  const onClickPrevMonth = () => {
    dispatch(updateSelectedDate(dateUtils.calculateDateProps(selectedDateProps, 'month', -1)))
    setBack(true)
  }
  const onClickNextYear = () => {
    const newDateProps = dateUtils.calculateDateProps(selectedDateProps, 'year', 1)
    if (blockFuture) {
      if (!dateUtils.isFuture(newDateProps)) {
        dispatch(updateSelectedDate(newDateProps))
        setBack(false)
      }
    } else {
      dispatch(updateSelectedDate(newDateProps))
      setBack(false)
    }
  }
  const onClickPrevYear = () => {
    dispatch(updateSelectedDate(dateUtils.calculateDateProps(selectedDateProps, 'year', -1)))
    setBack(true)
  }
  const onClickToday = () => dispatch(updateSelectedDate(dateUtils.getDateProps(new Date())))
  const todayDateProps = dateUtils.getTodayDateProps()
  return {
    onClickNextMonth,
    onClickPrevMonth,
    onClickNextYear,
    onClickPrevYear,
    onClickToday,
    todayDateProps,
    selectedYear: selectedDateProps.year,
    selectedMonth: selectedDateProps.month,
  }
}
