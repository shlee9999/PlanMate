import { ResponseStats } from 'api/types'
import { defaultStats } from 'constants/defaultStats'
import { useState } from 'react'
import { DateProps } from 'types'
import { dateUtils } from 'utils'
import { useTodayStats, useSelectedMonthStats } from './hooks'

export const useMainContainer = () => {
  const [selectedDate, setSelectedDate] = useState<DateProps>(dateUtils.getTodayDateProps())
  const { todayStats, todayLoading } = useTodayStats()
  const { selectedMonthStats, isSelectedLoading } = useSelectedMonthStats({ selectedDate })
  const isToday = dateUtils.isEqual(selectedDate, dateUtils.getDateProps(new Date()))
  const isLoading = isSelectedLoading || todayLoading
  const selectedDateData: ResponseStats = isLoading
    ? defaultStats
    : isToday
    ? todayStats
    : selectedMonthStats[selectedDate.date - 1] || defaultStats
  return { isLoading, selectedDate, setSelectedDate, selectedDateData, selectedMonthStats }
}
