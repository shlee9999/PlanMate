import { axiosGET } from 'api/common/commonAxios'

export type FindSubjectRequestProps = {
  subjectId: number
}

export type FindSubjectResponseProps = {
  colorHex: string
  name: string
  subjectId: 0
  type: string
}

export const findSubject = (req: FindSubjectRequestProps) => {
  return axiosGET('/subject/find', req)
}
