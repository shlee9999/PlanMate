import { axiosPOST } from 'api/common/commonAxios'

export type RefreshResponseProps = {
  accessToken: string
  refreshToken: string
  tokenId: 0
}

export const refresh = () => axiosPOST('/token/refresh')
