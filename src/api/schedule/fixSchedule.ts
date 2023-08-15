import { axiosGET } from 'api/common/commonAxios'

export type FixScheduleRequestProps = {
  id: number
}

export type FixScheduleResponseProps = boolean

export const fixSchedule = (req: FixScheduleRequestProps) => {
  return axiosGET('/schedule/fix', req)
}
