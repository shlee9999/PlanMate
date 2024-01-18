import { ResponseStats } from 'api/common/commonType'
import { axiosPOST } from 'api/common/commonAxios'
import { dateUtils } from 'utils/helper'

export type CheckStatsRequestProps = {
  year: number
  month: number
  date: number
}

export type CheckStatsResponseProps = ResponseStats

export const checkStats = ({ year, month, date }: CheckStatsRequestProps): Promise<ResponseStats> => {
  return axiosPOST('/statistic/day', {
    studyDate: dateUtils.getYYYYMMDD({ year, month: month + 1, date }),
  })
}
