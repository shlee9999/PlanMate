import { axiosPOST } from 'api/common/commonAxios'

export type ReissueResponseProps = any

export const reissue = () => {
  return axiosPOST('/token/reissue', {})
}
