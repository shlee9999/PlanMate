import { axiosPOST } from 'api/common/commonAxios'
import { DDayType } from 'api/types'

export type AddDdayRequestProps = Pick<DDayType, 'targetDate' | 'title'>

export type AddDdayResponseProps = Pick<DDayType, 'targetDate' | 'remainingDays' | 'dDayId' | 'title'>

/**D-Day 추가 */
export const addDday = ({ targetDate, title }: AddDdayRequestProps) => axiosPOST('/dday/add', { targetDate, title })
