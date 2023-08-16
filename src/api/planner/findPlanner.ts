import { axiosGET } from 'api/common/commonAxios'

export type FindPlannerRequestProps = {
  plannerId: number
}

export type FindPlannerResponseProps = {
  colorHex: string
  day: string
  endAt: string
  scheduleName: string
  startAt: string
  plannerId: number
}

export const findPlanner = (req: FindPlannerRequestProps) => {
  return axiosGET('planner/find', req)
}
