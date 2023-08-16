import { axiosPOST } from 'api/common/commonAxios'

export type EditPlannerRequestProps = {
  colorHex: string
  day: string
  endAt: string
  scheduleName: string
  startAt: string
  type: string
  //   plannerId:number
}

export type EditPlannerResponseProps = boolean

export const editPlanner = (req: EditPlannerRequestProps) => {
  return axiosPOST('/planner/edit', req)
}
