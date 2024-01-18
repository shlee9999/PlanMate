import { axiosPOST } from 'api/common/commonAxios'
import { ResponseStats } from 'api/common/commonType'

export type CheckStatsMonthlyRequestProps = {
  yearMonth: string
}

export type CheckStatsMonthlyResponseProps = ResponseStats[]

export const checkStatsMonthly = ({
  yearMonth,
}: CheckStatsMonthlyRequestProps): Promise<CheckStatsMonthlyResponseProps> => {
  return axiosPOST('/statistic/month', { yearMonth })
}
