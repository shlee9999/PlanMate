import { axiosGET } from 'api/common/commonAxios'
import { ResponseTimeProps } from 'api/common/commonType'

// export type StudyTimeRequestProps = {
// }

export type StudyTimeResponseProps = [
  {
    colorHex: string
    name: string
    studyTimeHours: number
    studyTimeMinutes: number
    studyTimeSeconds: number
    subjectId: number
  }
]

export const studyTime = () => {
  return axiosGET('/subject/studytime')
}
