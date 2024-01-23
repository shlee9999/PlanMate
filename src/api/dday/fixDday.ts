import { axiosPOST } from 'api/common/commonAxios'
import { DDayType } from 'api/types'

export type FixDdayRequestProps = Pick<DDayType, 'dDayId'>

/**D-Day 고정하기 */
export const fixSchedule = ({ dDayId }: FixDdayRequestProps) => axiosPOST('/dday/fix', { dDayId })
