import { axiosPOST } from 'api/common/commonAxios'
import { ScheduleType } from 'api/types'

export type FixScheduleRequestProps = Pick<ScheduleType, 'scheduleId'>

/**D-Day 고정하기 */
export const fixSchedule = ({ scheduleId }: FixScheduleRequestProps) => axiosPOST('/schedule/fix', { scheduleId })
