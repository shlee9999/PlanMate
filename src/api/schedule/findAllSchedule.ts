import { axiosGET } from 'api/common/commonAxios'
import { ScheduleType } from 'api/types'

export type FindAllScheduleResponseProps = Pick<
  ScheduleType,
  'scheduleId' | 'memberId' | 'targetDate' | 'title' | 'isFixed'
>[]
// id: number
// memberId: number
// targetDate: string
// title: string
// isFixed: boolean

/**D-Day 전체 조회 */
export const findAllSchedule = (): Promise<FindAllScheduleResponseProps> => axiosGET('/schedule/all')
