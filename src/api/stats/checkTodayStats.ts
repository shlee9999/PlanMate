import { axiosGET } from 'api/common/commonAxios'
import { ResponseStats } from 'api/common/types'

export type CheckTodayStatsResponseProps = ResponseStats

export const checkTodayStats = (): Promise<ResponseStats> => {
  return axiosGET('/statistic')
}
