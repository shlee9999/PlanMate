import { axiosGET } from 'api/common/commonAxios'

export type FindRequestProps = {
  subjectId: number
}

export type FindResponseProps = {
  colorHex: string
  name: string
  subjectId: 0
  type: string
}

export const find = (req: FindRequestProps) => {
  return axiosGET('/subject/find', req)
}
