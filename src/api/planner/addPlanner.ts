import { axiosPOST } from 'api/common/commonAxios'
import { PlannerType } from 'api/types'

export type AddPlannerRequestProps = Omit<PlannerType, 'plannerId'>

export const addPlanner = ({ colorHex, day, endAt, scheduleName, startAt }: AddPlannerRequestProps) =>
  axiosPOST('/planner/add', { colorHex, day, endAt, scheduleName, startAt })
