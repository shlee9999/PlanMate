import { axiosGET } from 'api/common/commonAxios'
import { SubjectType } from 'api/types'

export type StudyTimeResponseProps = Pick<
  SubjectType,
  'colorHex' | 'name' | 'studyTimeHours' | 'studyTimeMinutes' | 'studyTimeSeconds' | 'subjectId'
>[]

export const studyTime = (): Promise<StudyTimeResponseProps> => axiosGET('/subject/studytime')
