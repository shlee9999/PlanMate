import { axiosDELETE } from 'api/common/commonAxios'
import { PlannerType } from 'types'

export type RemovePlannerRequestProps = Pick<PlannerType, 'plannerId'>

export const removePlanner = ({ plannerId }: RemovePlannerRequestProps) => axiosDELETE('/planner/remove', { plannerId })
