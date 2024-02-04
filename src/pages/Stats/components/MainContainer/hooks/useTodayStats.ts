import { checkTodayStats } from 'api/stats/checkTodayStats'
import { ResponseStats } from 'api/types'
import { useQuery } from 'react-query'
import { QueryKeys } from 'types'

export const useTodayStats = () => {
  const { data: todayStats, isLoading: todayLoading } = useQuery<ResponseStats>([QueryKeys.todayStats], () =>
    checkTodayStats()
  )
  return { todayStats, todayLoading }
}
