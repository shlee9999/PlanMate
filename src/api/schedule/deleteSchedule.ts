import { axiosDELETE } from 'api/common/commonAxios'
import { ScheduleType } from 'api/types'

export type DeleteScheduleRequestProps = Pick<ScheduleType, 'scheduleId'>

/**D-Day 삭제 */
export const deleteSchedule = ({ scheduleId }: DeleteScheduleRequestProps) => axiosDELETE('/schedule', { scheduleId })
