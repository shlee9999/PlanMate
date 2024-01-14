import { ResponseStats } from 'api/common/commonType'
import { getYYYYMMDD } from 'utils/helper'

import { axiosPOST } from 'api/common/commonAxios'

export type CheckStatsRequestProps = {
  year: number
  month: number
  date: number
}

export type CheckStatsResponseProps = ResponseStats

export const checkStats = ({ year, month, date }: CheckStatsRequestProps): Promise<ResponseStats> => {
  return axiosPOST('/statistic/day', {
    studyDate: getYYYYMMDD({ year, month, date }),
  })
}
