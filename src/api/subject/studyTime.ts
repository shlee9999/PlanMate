import { axiosGET } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/commonType'

// export type StudyTimeRequestProps = {
// }

export type StudyTimeResponseProps = {
  name: string
  studyTime: ResponseTimeProps
  subjectId: 0
}

export const studyTime = () => {
  return axiosGET('/subject/studytime')
}
