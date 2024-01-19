import { axiosPOST } from 'api/common/commonAxios'
import { ScheduleType } from 'api/types'

export type AddScheduleRequestProps = Pick<ScheduleType, 'targetDate' | 'title'>

export type AddScheduleResponseProps = Pick<ScheduleType, 'targetDate' | 'remainingDays' | 'scheduleId' | 'title'>

/**D-Day 추가 */
export const addSchedule = ({ targetDate, title }: AddScheduleRequestProps) =>
  axiosPOST('/schedule/add', { targetDate, title })
