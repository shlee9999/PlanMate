import { axiosDELETE } from 'api/common/commonAxios'

export type SignoutResponseProps = boolean

export const signout = () => {
  return axiosDELETE('/member/sign-out')
}
