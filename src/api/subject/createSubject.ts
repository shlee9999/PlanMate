import { axiosPOST } from 'api/common/commonAxios'

export type CreateSubjectRequestProps = {
  colorHex: string
  name: string
}

export type CreateSubjectResponseProps = {
  colorHex: string
  name: string
  subjectId: number
}

export const createSubject = (req: CreateSubjectRequestProps) => {
  return axiosPOST('/subject/create', req)
}
