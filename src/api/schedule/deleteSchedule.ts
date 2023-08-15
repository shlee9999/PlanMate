import { axiosDELETE } from 'api/common/commonAxios'

export type DeleteScheduleRequestProps = {
  id: number
}

export type DeleteScheduleResponseProps = boolean

export const deleteSchedule = (req: DeleteScheduleRequestProps) => {
  return axiosDELETE('/schedule/remove', req)
}
