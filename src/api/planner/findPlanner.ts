import { axiosGET } from 'api/common/commonAxios'
import { IAppointment } from 'types'

export type FindPlannerResponseProps = IAppointment[]

export const findPlanner = (): Promise<FindPlannerResponseProps> => {
  return axiosGET('planner/find')
}
