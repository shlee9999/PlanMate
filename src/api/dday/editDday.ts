import { axiosPOST } from 'api/common/commonAxios'
import { DDayType } from 'api/types'

export type EditDdayRequestProps = Pick<DDayType, 'targetDate' | 'ddayId' | 'title'>

export type EditDdayResponseProps = Pick<DDayType, 'targetDate' | 'remainingDays' | 'ddayId' | 'title'> // date: string

/**D-Day 수정 */
export const editSchedule = ({ targetDate, ddayId, title }: EditDdayRequestProps) =>
  axiosPOST('/dday/edit', { targetDate, ddayId, title })
