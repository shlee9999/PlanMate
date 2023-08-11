export type ResponsePostType = {
  commentCount: number
  content: string
  isMyHearted: boolean
  isMyScraped: boolean
  likeCount: number
  nickname: string
  postId: number
  postTagList: string[]
  scrapCount: number
  title: string
  updatedAt: string
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
