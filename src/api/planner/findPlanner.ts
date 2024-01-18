import { axiosGET } from 'api/common/commonAxios'
import { PlannerType } from 'types'

export type FindPlannerResponseProps = PlannerType[]

export const findPlanner = (): Promise<FindPlannerResponseProps> => axiosGET('planner/find')
