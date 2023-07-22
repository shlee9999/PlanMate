import { axiosDELETE } from 'api/common/commonAxios'

export type RemoveRequestProps = {
  subjectId: number
}

export type RemoveResponseProps = boolean

export const remove = (req: RemoveRequestProps) => {
  return axiosDELETE('/subject/remove', req)
}
