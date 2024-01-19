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
