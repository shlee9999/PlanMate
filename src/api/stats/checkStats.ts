import { axiosGET } from 'api/common/commonAxios'
import { ResponseStats } from 'api/common/commonType'
import { getYYYYMMDD } from 'utils/helper'

export type StatisticRequestProps = {
  year: number
  month: number
  date: number
}

export const checkStats = ({ year, month, date }: StatisticRequestProps): Promise<ResponseStats> => {
  return axiosGET('/statistic/day', {
    studyDate: getYYYYMMDD({ year, month, date }),
  })
}
