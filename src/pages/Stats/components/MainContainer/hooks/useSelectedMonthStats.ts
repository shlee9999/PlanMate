import { checkStatsMonthly } from 'api/stats/checkStatsMonthly'
import { ResponseStats } from 'api/types'
import { defaultStats } from 'constants/defaultStats'
import { useQuery } from 'react-query'
import { DateProps, QueryKeys } from 'types'
import { dateUtils, numberUtils } from 'utils'

type useSelectedMonthStatsProps = {
  selectedDate: DateProps
}

export const useSelectedMonthStats = ({ selectedDate }: useSelectedMonthStatsProps) => {
  const { data: selectedMonthStats, isLoading: isSelectedLoading } = useQuery<ResponseStats[]>(
    [QueryKeys.timeInfo, selectedDate.month],
    () =>
      checkStatsMonthly({
        yearMonth: dateUtils.getYYYYMMDD(selectedDate),
      }),
    { initialData: numberUtils.createSequentialNumbers(1, 31).map(() => defaultStats) }
  )

  return { selectedMonthStats, isSelectedLoading }
}
