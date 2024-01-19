import { axiosGET } from 'api/common/commonAxios'
import { ScheduleType } from 'api/types'

export type FindFixedScheduleResponseProps = Pick<ScheduleType, 'targetDate' | 'remainingDays' | 'scheduleId' | 'title'>

/**고정된 D-Day 조회. 타이머 페이지에 필요*/
export const findFixedSchedule = () => axiosGET('/schedule/fix')
