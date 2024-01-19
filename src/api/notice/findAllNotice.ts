import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/types'

export type FindAllNoticeRequestProps = {
  pages: number
}

export type FindAllNoticeResponseProps = {
  noticeDtoList: [
    {
      commentCount: number
      content: string
      createdAt: string
      isMyHearted: boolean
      isMyScraped: boolean
      likeCount: number
      nickname: string
      noticeId: number
      scrapCount: number
      title: string
    }
  ]
  totalPages: number
}

export const findAllNotice = (req: FindAllNoticeRequestProps) => {
  return axiosGET('/notice', req)
}
