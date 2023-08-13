export type ResponsePostType = {
  commentCount: number
  content: string
  isMyHearted: boolean
  isMyScraped: boolean
  likeCount: number
  nickname: string
  postTagList: string[]
  scrapCount: number
  title: string
  createdAt: string
  postId?: number
  noticeId?: number
}

export type ResponseNoticeType = {
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
export type ResponseTimeProps = {
  date: string
  day: string
  hours: string
  minutes: string
  month: string
  seconds: string
  time: string
  timezoneOffset: string
  year: string
}

export type ResponseCommentType = {
  commentId: number
  content: string
  isAuthor: boolean
  isMyHearted: boolean
  likeCount: number
  memberName: string
  updatedAt: string
  postId: number
}
