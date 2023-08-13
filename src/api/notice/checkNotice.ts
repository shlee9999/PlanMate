import { axiosGET } from 'api/common/commonAxios'

export type CheckNoticeRequestProps = {
  noticeId: number
}

export type CheckNoticeResponseProps = {
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

export const checkNotice = (req: CheckNoticeRequestProps) => {
  return axiosGET('', req)
}
