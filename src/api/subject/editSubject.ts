import { axiosPOST } from 'api/common/commonAxios'

export type EditSubjectRequestProps = {
  colorHex: string
  name: string
  subjectId: number
}

export type EditSubjectResponseProps = boolean

export const editSubject = (req: EditSubjectRequestProps) => {
  return axiosPOST('/subject/edit', req)
}
