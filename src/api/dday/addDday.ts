import { axiosPOST } from 'api/common/commonAxios'
import { DDayType } from 'api/types'

export type AddDdayRequestProps = Pick<DDayType, 'targetDate' | 'title'>

export type AddDdayResponseProps = Pick<DDayType, 'targetDate' | 'remainingDays' | 'ddayId' | 'title'>

/**D-Day 추가 */
export const addSchedule = ({ targetDate, title }: AddDdayRequestProps) => axiosPOST('/dday/add', { targetDate, title })
