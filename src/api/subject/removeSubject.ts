import { axiosDELETE } from 'api/common/commonAxios'
import { SubjectType } from 'api/types'

export type RemoveSubjectRequestProps = Pick<SubjectType, 'subjectId'>

export const removeSubject = ({ subjectId }: RemoveSubjectRequestProps) => axiosDELETE('/subject/remove', { subjectId })
