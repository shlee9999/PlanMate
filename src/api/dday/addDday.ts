import { axiosPOST } from 'api/common/commonAxios'
import { DDayType } from 'api/types'
import { DDayEntityType } from 'api/types/ScheduleType'

export type AddDdayRequestProps = Pick<DDayType, 'targetDate' | 'title'>

export type AddDdayResponseProps = DDayEntityType

/**D-Day 추가 */
export const addDday = ({ targetDate, title }: AddDdayRequestProps) => axiosPOST('/dday/add', { targetDate, title })
