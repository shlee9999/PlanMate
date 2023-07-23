import { axiosPOST } from 'api/common/commonAxios'

export type CreateSubjectRequestProps = {
  colorHex: string
  name: string
  type: true
}

export type CreateSubjectResponseProps = {
  colorHex: string
  name: string
  subjectId: 0
  type: string
}

export const createSubject = (req: CreateSubjectRequestProps) => {
  return axiosPOST('/subject/create', req)
}
