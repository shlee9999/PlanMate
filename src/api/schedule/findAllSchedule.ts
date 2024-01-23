import { axiosGET } from 'api/common/commonAxios'
import { DDayType } from 'api/types/ScheduleType'

export type FindAllScheduleResponseProps = DDayType[]

/**D-Day 전체 조회 */
export const findAllSchedule = (): Promise<FindAllScheduleResponseProps> => axiosGET('/schedule/all')
