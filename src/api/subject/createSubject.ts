import { axiosPOST } from 'api/common/commonAxios'
import { SubjectType } from 'api/types'

export type CreateSubjectRequestProps = Pick<SubjectType, 'colorHex' | 'name'>

export type CreateSubjectResponseProps = Pick<SubjectType, 'colorHex' | 'name' | 'subjectId'>

export const createSubject = ({ colorHex, name }: CreateSubjectRequestProps): Promise<CreateSubjectResponseProps> =>
  axiosPOST('/subject/create', { colorHex, name })
