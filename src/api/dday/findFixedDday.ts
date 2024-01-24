import { axiosGET } from 'api/common/commonAxios'
import { DDayEntityType } from 'api/types/ScheduleType'

export type FindFixedDdayResponseProps = Omit<DDayEntityType, 'isFixed'>

/**고정된 D-Day 조회. 타이머 페이지에 필요*/
export const findFixedDday = (): Promise<FindFixedDdayResponseProps> => axiosGET('/dday/fix')
