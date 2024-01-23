import { axiosDELETE } from 'api/common/commonAxios'
import { DDayType } from 'api/types'

export type DeleteDdayRequestProps = Pick<DDayType, 'ddayId'>

/**D-Day 삭제 */
export const deleteSchedule = ({ ddayId }: DeleteDdayRequestProps) => axiosDELETE('/dday', { ddayId })
