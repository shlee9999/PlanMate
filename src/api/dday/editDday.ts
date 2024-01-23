import { axiosPOST } from 'api/common/commonAxios'
import { DDayType } from 'api/types'

export type EditDdayRequestProps = Pick<DDayType, 'targetDate' | 'dDayId' | 'title'>

export type EditDdayResponseProps = Pick<DDayType, 'targetDate' | 'remainingDays' | 'dDayId' | 'title'> // date: string

/**D-Day 수정 */
export const editSchedule = ({ targetDate, dDayId, title }: EditDdayRequestProps) =>
  axiosPOST('/dday/edit', { targetDate, dDayId, title })
