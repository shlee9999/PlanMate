import { axiosGET } from 'api/common/commonAxios'
import { ResponseStats } from 'api/common/commonType'

export type StatisticRequestProps = {
  year: number
  month: number
  date: number
}

export const checkStats = (req: StatisticRequestProps): Promise<ResponseStats> => {
  return axiosGET('/statistic', req)
}
