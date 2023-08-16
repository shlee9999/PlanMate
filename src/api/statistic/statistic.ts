import { axiosGET } from 'api/common/commonAxios'

export type StatisticRequestProps = {
  year: number
  month: number
  date: number
}

export type StatisticResPonseProps = {
  endAtHours: number
  endAtMinutes: number
  maxStudyTimeHours: number
  maxStudyTimeMinutes: number
  maxStudyTimeSeconds: number
  restTimeHours: number
  restTimeMinutes: number
  restTimeSeconds: number
  startAtHours: number
  startAtMinutes: number
  studyTimeList: StudyTimeEntry[]
  totalStudyTimeHours: number
  totalStudyTimeMinutes: number
  totalStudyTimeSeconds: number
}
//CompareChart(compareTip, bumpGraph) 항목 필요.

export type StudyTimeEntry = {
  name: string
  studyTimeHours: number
  studyTimeMinutes: number
  studyTimeSeconds: number
}

export const Statistic = (req: StatisticRequestProps) => {
  return axiosGET('/statistic', req)
}
