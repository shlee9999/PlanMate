import { axiosDELETE } from 'api/common/commonAxios'

export type RemovePlannerRequestProps = {
  plannerId: number
}

export type RemovePlannerResponseProps = boolean

export const removePlanner = (req: RemovePlannerRequestProps) => {
  return axiosDELETE('/planner/remove', req)
}
