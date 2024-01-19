import { axiosPOST } from 'api/common/commonAxios'
import { ScheduleType } from 'api/types'

export type EditScheduleRequestProps = Pick<ScheduleType, 'targetDate' | 'scheduleId' | 'title'>

export type EditScheduleResponseProps = Pick<ScheduleType, 'targetDate' | 'remainingDays' | 'scheduleId' | 'title'> // date: string

/**D-Day 수정 */
export const editSchedule = ({ targetDate, scheduleId, title }: EditScheduleRequestProps) =>
  axiosPOST('/schedule/modify', { targetDate, scheduleId, title })
