import { CommentType } from 'api/types/CommentType'

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

export type ResponseCommentType = Pick<
  CommentType,
  'commentId' | 'content' | 'isAuthor' | 'isMyHearted' | 'likeCount' | 'memberName' | 'updatedAt' | 'postId'
>

export type StudyTimeEntry = {
  name: string
  studyTimeHours: number
  studyTimeMinutes: number
  studyTimeSeconds: number
}

export type ResponseStats = {
  endAtHours: number
  endAtMinutes: number
  maxStudyTimeHours: number
  maxStudyTimeMinutes: number
  maxStudyTimeSeconds: number
  restTimeHours: number
  restTimeMinutes: number
  restTimeSeconds: number
  startAtHours: number
  startAtMinutes: number
  studyTimeList: StudyTimeEntry[]
  totalStudyTimeHours: number
  totalStudyTimeMinutes: number
  totalStudyTimeSeconds: number
}
