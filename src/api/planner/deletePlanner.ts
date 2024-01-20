import { axiosDELETE } from 'api/common/commonAxios'
import { PlannerType } from 'api/types'

export type DeletePlannerRequestProps = Pick<PlannerType, 'plannerId'>

export const deletePlanner = ({ plannerId }: DeletePlannerRequestProps) => axiosDELETE('/planner', { plannerId })
