import { axiosGET } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/commonType'
import { TodoItemType } from 'types'

// export type StudyTimeRequestProps = {
// }

export type StudyTimeResponseProps = {
  colorHex: string
  name: string
  studyTimeHours: number
  studyTimeMinutes: number
  studyTimeSeconds: number
  subjectId: number
}[]

export const studyTime = (): Promise<StudyTimeResponseProps> => {
  return axiosGET('/subject/studytime')
}
