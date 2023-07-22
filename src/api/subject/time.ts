import { axiosPOST } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/commonType'

export type TimeRequestProps = {
  endAt: string
  startAt: string
  subjectId: number
}

export type TimeResponseProps = {
  maxStudyTime: ResponseTimeProps
  name: string
  restTime: ResponseTimeProps
  studyTime: ResponseTimeProps
  subjectId: number
  type: string
}

export const time = (req: TimeRequestProps) => {
  return axiosPOST('/subject/time', req)
}
