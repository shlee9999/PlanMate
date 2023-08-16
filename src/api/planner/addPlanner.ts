import { axiosPOST } from 'api/common/commonAxios'

export type AddPlannerRequestProps = {
  colorHex: string
  day: string
  endAt: string
  scheduleName: string
  startAt: string
  type: string
}
//수정 : endAt, startAt -> hour, minute 분리, NUMBER 타입
//삭제 : type

export type AddPlannerResponseProps = {
  colorHex: string
  day: string
  endAt: string
  scheduleName: string
  startAt: string
  type: string
  //   plannerId: number
}

export const addPlanner = (req: AddPlannerRequestProps) => {
  return axiosPOST('/planner/add', req)
}
