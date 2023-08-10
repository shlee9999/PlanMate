import { axiosGET } from 'api/common/commonAxios'

export type FindAllScheduleResponseProps = [
  {
    id: number
    memberId: number
    targetDate: string
    title: string
  }
]

export const findAllSchedule = () => {
  return axiosGET('/schedule/all')
}
