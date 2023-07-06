import { axiosPOST } from 'api/common/commonAxios'

export type ScrapPostRequestProps = {
  postId: number
}

export type ScrapPostResponseProps = boolean

export const scrapPost = ({}: ScrapPostRequestProps) => {
  return axiosPOST('', {})
}
