import { axiosDELETE } from 'api/common/commonAxios'
import { DDayType } from 'api/types'

export type DeleteDdayRequestProps = Pick<DDayType, 'dDayId'>

/**D-Day 삭제 */
export const deleteSchedule = ({ dDayId }: DeleteDdayRequestProps) => axiosDELETE('/dday', { dDayId })
