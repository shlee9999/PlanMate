import { axiosGET } from 'api/common/commonAxios'
import { ResponseStats } from 'api/common/commonType'

export type CheckTodayStatsResponseProps = ResponseStats

export const checkTodayStats = (): Promise<ResponseStats> => {
  return axiosGET('/statistic')
}
