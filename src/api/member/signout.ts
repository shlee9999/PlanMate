import { axiosDELETE } from 'api/common/commonAxios'

export type SignoutResponseProps = {
  body: {}
  statusCode: string
  statusCodeValue: 0
}

export const signout = () => {
  return axiosDELETE('/member/sign-out')
}
