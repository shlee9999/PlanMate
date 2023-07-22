import { axiosPOST } from 'api/common/commonAxios'

export type ResetResponseProps = boolean

export const reset = () => {
  return axiosPOST('/subject/reset')
}
