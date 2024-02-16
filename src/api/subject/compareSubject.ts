import { axiosGET } from 'api/common/commonAxios'

export type CompareSubjectResponseProps = {
  nowGraphHour: number
  todayHour: number
  todayMinute: number
  todaySecond: number
  todayStudyTimeList: {
    hour: number
    minute: number
    second: number
  }[]

  yesterdayStudyTimeList: {
    hour: number
    minute: number
    second: number
  }[]
}

export const compareSubject = (): Promise<CompareSubjectResponseProps> => {
  return axiosGET('/subject/time-slice')
}
