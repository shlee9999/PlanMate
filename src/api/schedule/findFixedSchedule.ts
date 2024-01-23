import { axiosGET } from 'api/common/commonAxios'
import { DDayType } from 'api/types/ScheduleType'

export type FindFixedScheduleResponseProps = Omit<DDayType, 'isFixed'>

/**고정된 D-Day 조회. 타이머 페이지에 필요*/
export const findFixedSchedule = (): Promise<FindFixedScheduleResponseProps> => axiosGET('/schedule/fix')
