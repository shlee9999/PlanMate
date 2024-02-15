import { axiosGET } from 'api/common/commonAxios'

export type CompareSubjectResponseProps = {
  nowGraphHour: number
  todayHour: number
  todayMinute: number
  todaySecond: number
  yesterdayStudyTimeList: {
    yesterdayHour: number
    yesterdayMinute: number
    yesterdaySecond: number
  }[]
}

export const compareSubject = (): Promise<CompareSubjectResponseProps> => {
  return axiosGET('/subject/time-slice')
}
