import { axiosPOST } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/commonType'

export type EditSubjectRequestProps = {
  colorHex: string
  name: string
  subjectId: number
}

export type EditSubjectResponseProps = {
  colorHex: string
  endAt: ResponseTimeProps
  id: number
  maxStudyTime: ResponseTimeProps
  memberId: number
  name: string
  restTime: ResponseTimeProps
  startAt: ResponseTimeProps
  studyTime: ResponseTimeProps
}

export const editSubject = (req: EditSubjectRequestProps) => {
  return axiosPOST('/subject/edit', req)
}
