import { axiosPOST } from 'api/common/commonAxios'
import { ResponseStats } from 'api/common/types'

export type CheckStatsMonthlyRequestProps = {
  yearMonth: string
}

export type CheckStatsMonthlyResponseProps = ResponseStats[]

export const checkStatsMonthly = ({
  yearMonth,
}: CheckStatsMonthlyRequestProps): Promise<CheckStatsMonthlyResponseProps> => {
  return axiosPOST('/statistic/month', { yearMonth })
}
