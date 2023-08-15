import { axiosGET } from 'api/common/commonAxios'

export type FindClosestScheduleResponseProps = {
  date: string
  dday: number
  id: number
  title: string
} | null

export const findClosestSchedule = () => {
  return axiosGET('/schedule/min')
}
