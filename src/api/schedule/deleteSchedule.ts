import { axiosDELETE } from 'api/common/commonAxios'

export type DeleteScheduleRequestProps = {
  id: number
}

export type DeleteScheduleResponseProps = { body: {}; statusCode: string; statusCodeValue: number }

export const deleteSchedule = (req: DeleteScheduleRequestProps) => {
  return axiosDELETE('/schedule/remove', req)
}
