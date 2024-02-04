import { checkStatsMonthly } from 'api/stats/checkStatsMonthly'
import { checkTodayStats } from 'api/stats/checkTodayStats'
import { ResponseStats } from 'api/types'
import { defaultStats } from 'constants/defaultStats'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { DateProps, QueryKeys } from 'types'
import { dateUtils, numberUtils } from 'utils'

export const useMainContainer = () => {
  const [selectedDate, setSelectedDate] = useState<DateProps>(dateUtils.getTodayDateProps())
  const { data: todayStats, isLoading: todayLoading } = useQuery<ResponseStats>([QueryKeys.todayStats], () =>
    checkTodayStats()
  )
  const { data: selectedMonthStats, isLoading: isSelectedLoading } = useQuery<ResponseStats[]>(
    [QueryKeys.timeInfo, selectedDate.month],
    () =>
      checkStatsMonthly({
        yearMonth: dateUtils.getYYYYMMDD(selectedDate),
      }),
    { initialData: numberUtils.createSequentialNumbers(1, 31).map(() => defaultStats) }
  )
  const isToday = dateUtils.isEqual(selectedDate, dateUtils.getDateProps(new Date()))
  const isLoading = isSelectedLoading || todayLoading
  const selectedDateData: ResponseStats = isLoading
    ? defaultStats
    : isToday
    ? todayStats
    : selectedMonthStats[selectedDate.date - 1] || defaultStats

  return { isLoading, selectedDate, setSelectedDate, selectedDateData, selectedMonthStats }
}
