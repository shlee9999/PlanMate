import { axiosPOST } from 'api/common/commonAxios'
import { PlannerType } from 'api/types'

export type AddPlannerRequestProps = Omit<PlannerType, 'plannerId'>
export type AddPlannerResponseProps = PlannerType

export const addPlanner = ({
  colorHex,
  day,
  endAt,
  scheduleName,
  startAt,
}: AddPlannerRequestProps): Promise<AddPlannerResponseProps> =>
  axiosPOST('/planner/add', { colorHex, day, endAt, scheduleName, startAt })
