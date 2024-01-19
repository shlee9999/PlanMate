import { axiosPOST } from 'api/common/commonAxios'
import { PlannerType } from 'api/types'

export type EditPlannerRequestProps = PlannerType

export const editPlanner = ({ scheduleName, plannerId, colorHex, day, startAt, endAt }: EditPlannerRequestProps) =>
  axiosPOST('/planner/edit', { scheduleName, plannerId, colorHex, day, startAt, endAt })
