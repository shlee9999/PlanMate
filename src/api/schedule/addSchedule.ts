import { axiosPOST } from 'api/common/commonAxios'

export type AddScheduleRequestProps = {
  targetDate: string
  title: string
}

export type AddScheduleResponseProps = {
  date: string
  dday: number
  id: number
  title: string
}

export const addSchedule = (req: AddScheduleRequestProps) => {
  return axiosPOST('/schedule/add', req)
}
