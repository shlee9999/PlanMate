import { axiosGET } from 'api/common/commonAxios'
import { DDayEntityType } from 'api/types/ScheduleType'

export type FindAllDdayResponseProps = DDayEntityType[]

/**D-Day 전체 조회 */
export const findAllSchedule = (): Promise<FindAllDdayResponseProps> => axiosGET('/dday/all')
