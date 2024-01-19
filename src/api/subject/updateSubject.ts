import { axiosPOST } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/types'

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
}

export const updateSubject = (req: UpdateSubjectRequestProps) => {
  return axiosPOST('/subject/time', req)
}
