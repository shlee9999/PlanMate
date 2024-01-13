import { axiosGET } from 'api/common/commonAxios'

export type FindPlannerResponseProps = {
  colorHex: string
  day: string
  endAt: string
  scheduleName: string
  startAt: string
  type: string
}[]

export const findPlanner = () => {
  return axiosGET('planner/find')
}
