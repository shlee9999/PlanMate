import { axiosGET } from 'api/common/commonAxios'

export type FindFixedScheduleResponseProps = {
  date: string
  dday: number
  id: number
  title: string
} | null

export const findFixedSchedule = () => {
  return axiosGET('/schedule/fix')
}
