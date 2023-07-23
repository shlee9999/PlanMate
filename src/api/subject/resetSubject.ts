import { axiosPOST } from 'api/common/commonAxios'

export type ResetSubjectResponseProps = boolean

export const resetSubject = () => {
  return axiosPOST('/subject/reset')
}
