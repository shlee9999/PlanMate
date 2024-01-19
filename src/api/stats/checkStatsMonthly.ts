import { axiosPOST } from 'api/common/commonAxios'
import { ResponseStats, StatsType } from 'api/types'

export type CheckStatsMonthlyRequestProps = Pick<StatsType, 'yearMonth'>

export type CheckStatsMonthlyResponseProps = ResponseStats[]

export const checkStatsMonthly = ({
  yearMonth,
}: CheckStatsMonthlyRequestProps): Promise<CheckStatsMonthlyResponseProps> =>
  axiosPOST('/statistic/month', { yearMonth })
