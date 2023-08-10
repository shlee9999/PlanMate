import { axiosPOST } from 'api/common/commonAxios'

export type EditScheduleRequestProps = {
  date: string
  id: number
  title: string
}

export type EditScheduleResponseProps = {
  date: string
  dday: number
  id: number
  title: string
}

export const editSchedule = (req: EditScheduleRequestProps) => {
  return axiosPOST('/schedule/modify', req)
}
