import { axiosPOST } from 'api/common/commonAxios'
import { DDayType } from 'api/types'

export type FixDdayRequestProps = Pick<DDayType, 'ddayId'>

/**D-Day 고정하기 */
export const fixSchedule = ({ ddayId }: FixDdayRequestProps) => axiosPOST('/dday/fix', { ddayId })
