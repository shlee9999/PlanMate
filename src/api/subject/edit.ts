import { axiosPOST } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/commonType'

export type EditRequestProps = {
  colorHex: string
  name: string
  subjectId: 0
}

export type EditResponseProps = {
  colorHex: 'string'
  endAt: ResponseTimeProps
  id: number
  maxStudyTime: ResponseTimeProps
  memberId: number
  name: string
  restTime: ResponseTimeProps
  startAt: ResponseTimeProps
  studyTime: ResponseTimeProps
  type: boolean
}

export const edit = (req: EditRequestProps) => {
  return axiosPOST('/subject/edit', req)
}
