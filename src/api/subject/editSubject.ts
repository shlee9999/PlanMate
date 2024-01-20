import { axiosPOST } from 'api/common/commonAxios'
import { SubjectType } from 'api/types'

export type EditSubjectRequestProps = Pick<SubjectType, 'colorHex' | 'name' | 'subjectId'>

export const editSubject = ({ colorHex, name, subjectId }: EditSubjectRequestProps) =>
  axiosPOST('/subject/edit', { colorHex, name, subjectId })
