import { axiosGET } from 'api/common/commonAxios'
import { ScheduleType } from 'api/types'

export type FindAllScheduleResponseProps = Pick<
  ScheduleType,
  'scheduleId' | 'memberId' | 'targetDate' | 'title' | 'isFixed'
>[]

/**D-Day 전체 조회 */
export const findAllSchedule = (): Promise<FindAllScheduleResponseProps> => axiosGET('/schedule/all')
