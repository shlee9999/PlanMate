import { axiosPOST } from 'api/common/commonAxios'
import { ResponseStats, StatsType } from 'api/types'
import { dateUtils } from 'utils'

export type CheckStatsRequestProps = Pick<StatsType, 'year' | 'month' | 'date'>

export type CheckStatsResponseProps = ResponseStats

export const checkStats = ({ year, month, date }: CheckStatsRequestProps): Promise<ResponseStats> =>
  axiosPOST('/statistic/day', {
    studyDate: dateUtils.getYYYYMMDD({ year, month: month + 1, date }),
  })
