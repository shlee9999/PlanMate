import { axiosPOST } from 'api/common/commonAxios'

export type SuggestRequestProps = {
  body: string
  tag: string
  title: string
}

export type SuggestResponseProps = { body: string; statusCode: string; statusCodeValue: number }

export const suggest = (req: SuggestRequestProps) => {
  return axiosPOST('/tendinous/alert', req)
}
