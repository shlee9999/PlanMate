import { axiosGET } from 'api/common/commonAxios'
import { PostType, ResponsePostType } from 'api/types'
import { ResponseNoticeType } from 'api/types/PostType'

export type FindAllNoticeRequestProps = Pick<PostType, 'pages'>

export type FindAllNoticeResponseProps = {
  noticeDtoList: ResponseNoticeType[]
  totalPages: number
}

export const findAllNotice = (req: FindAllNoticeRequestProps) => {
  return axiosGET('/notice', req)
}
