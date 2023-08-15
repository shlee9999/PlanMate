import { axiosPOST } from 'api/common/commonAxios'

export type FixScheduleRequestProps = {
  id: number
}

export type FixScheduleResponseProps = boolean

export const fixSchedule = (req: FixScheduleRequestProps) => {
  return axiosPOST('/schedule/fix', req)
}
