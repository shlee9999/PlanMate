import { axiosPOST } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/commonType'

export type UpdateSubjectRequestProps = {
  endAt: string
  startAt: string
  subjectId: number
}

export type UpdateSubjectResponseProps = {
  maxStudyTime: ResponseTimeProps
  name: string
  restTime: ResponseTimeProps
  studyTime: ResponseTimeProps
  subjectId: number
  type: string
}

export const updateSubject = (req: UpdateSubjectRequestProps) => {
  return axiosPOST('/subject/time', req)
}
