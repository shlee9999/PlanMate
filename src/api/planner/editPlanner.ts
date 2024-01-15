import { axiosPOST } from 'api/common/commonAxios'
import { IAppointment } from 'types'

export type EditPlannerRequestProps = IAppointment

export const editPlanner = (req: EditPlannerRequestProps) => {
  return axiosPOST('/planner/edit', req)
}
