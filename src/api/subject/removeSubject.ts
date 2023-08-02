import { axiosDELETE } from 'api/common/commonAxios'

export type RemoveSubjectRequestProps = {
  subjectId: number
}

export type RemoveSubjectResponseProps = boolean

export const removeSubject = (req: RemoveSubjectRequestProps) => {
  return axiosDELETE('/subject/remove', req)
}
