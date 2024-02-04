import { axiosGET } from 'api/common/commonAxios'
import { SubjectType } from 'api/types'

export type FindAllSubjectResponseProps = Pick<
  SubjectType,
  'colorHex' | 'name' | 'studyTimeHours' | 'studyTimeMinutes' | 'studyTimeSeconds' | 'subjectId'
>[]

export const findAllSubject = (): Promise<FindAllSubjectResponseProps> => axiosGET('/subject/studytime')
