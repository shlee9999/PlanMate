import { axiosPOST } from 'api/common/commonAxios'
import { SubjectType } from 'api/types'

export type UpdateSubjectRequestProps = Pick<SubjectType, 'endAt' | 'startAt' | 'subjectId'>

export const updateSubject = ({ endAt, startAt, subjectId }: UpdateSubjectRequestProps) =>
  axiosPOST('/subject/time', { endAt, startAt, subjectId })
