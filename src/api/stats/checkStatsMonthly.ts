import { axiosPOST } from 'api/common/commonAxios'
import { ResponseStats } from 'api/common/commonType'

export type CheckStatsMonthlyRequestProps = {
  yearMonth: {
    year: number
    month: number
  }
}

export type CheckStatsMonthlyResponseProps = ResponseStats[]

export const checkStatsMonthly = (req: CheckStatsMonthlyRequestProps): Promise<CheckStatsMonthlyResponseProps> => {
  return axiosPOST('/statistic/month', req)
}
