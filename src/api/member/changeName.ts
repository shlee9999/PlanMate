import { axiosGET } from 'api/common/commonAxios'

export type ChangeNameRequestProps = {
  name: string
}

export type ChangeNameResponseProps = {
  authorities: string
  email: string
  loginType: number
  memberId: number
  memberName: string
  profile: string
}

export const changeName = (req: ChangeNameRequestProps) => {
  return axiosGET('/member/name', req)
}
