import { checkTodayStats } from 'api/stats/checkTodayStats'
import { ResponseStats } from 'api/types'
import { useQuery } from 'react-query'
import { QueryKeys, TimeProps } from 'types'

export const useTodayStats = () => {
  const { data: todayStatsData, isLoading: isStatsLoading } = useQuery<ResponseStats>([QueryKeys.todayStats], () =>
    checkTodayStats()
  )
  const {
    restTimeHours = 0,
    restTimeMinutes = 0,
    restTimeSeconds = 0,
    totalStudyTimeHours = 0,
    totalStudyTimeMinutes = 0,
    totalStudyTimeSeconds = 0,
  } = todayStatsData || {}
  const totalStudyTime: TimeProps = {
    hour: totalStudyTimeHours,
    minute: totalStudyTimeMinutes,
    second: totalStudyTimeSeconds,
  }
  const restTime: TimeProps = {
    hour: restTimeHours,
    minute: restTimeMinutes,
    second: restTimeSeconds,
  }
  return { todayStatsData, totalStudyTime, restTime, isStatsLoading }
}
