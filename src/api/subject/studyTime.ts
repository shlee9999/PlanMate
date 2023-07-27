import { axiosGET } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/commonType'

// export type StudyTimeRequestProps = {
// }

export type StudyTimeResponseProps = {
  name: string
  studyTime: ResponseTimeProps
  subjectId: number
}[]

export const studyTime = () => {
  return axiosGET('/subject/studytime')
}
