import { axiosPOST } from 'api/common/commonAxios'

export type CreateRequestProps = {
  colorHex: string
  name: string
  type: true
}

export type CreateResponseProps = {
  colorHex: string
  name: string
  subjectId: 0
  type: string
}

export const create = (req: CreateRequestProps) => {
  return axiosPOST('/subject/create', req)
}
