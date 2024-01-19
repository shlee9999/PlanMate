import { axiosGET } from 'api/common/commonAxios'
import { ResponseStats } from 'api/types'

export type CheckTodayStatsResponseProps = ResponseStats

export const checkTodayStats = (): Promise<ResponseStats> => axiosGET('/statistic')
