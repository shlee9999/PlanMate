export type TodoItemType = {
  colorHex: string
  name: string
  subjectId: number
  time: number
}
export type PageInfo = {
  title: string
  url: string
}

/**{ hour, minute, second } */
export interface TimeProps {
  hour: number
  minute: number
  second?: number
}
/**{ year, month, date } */
export type DateProps = {
  year: number
  month: number
  date: number
}

export const DISPLAY = {
  XLARGE: 'XLARGE',
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
} as const

/**
 * XLARGE | LARGE | MEDIUM | SMALL
 */
export type DisplayType = (typeof DISPLAY)[keyof typeof DISPLAY]

export type DisplayProps<T> = {
  [key in DisplayType]: T
}

export const QueryKeys = {
  //* Timer
  todoList: 'todoList',
  timeInfo: 'timeInfo',
  fixedDday: 'fixedDday',
  //* Stats
  todayStats: 'todayStats',
  compareData: 'compareData',
  //* Planner - Scheduler
  plannerData: 'plannerData',
  //* ExamInfo
  findAllResponse: 'findAllResponse', //*ExamInfoPage
  detailData: 'detailData', //* Detail
  commentData: 'commentData',
  replyList: 'replyList', //*Comment

  //*MyPage
  dDayList: 'dDayList',
  myPostInfo: 'myPostInfo',
  myScrapInfo: 'myScrapInfo',
  myCommentInfo: 'myCommentInfo',
}

export const StatsContainerPages = {
  timer: 0,
  stats: 1,
}
export type StatsContainerType = (typeof StatsContainerPages)[keyof typeof StatsContainerPages]

//* userAuthInfo
export type userAuthInfoType = {
  memberId: number
  nickname: string
  profileImage: string
  email: string
  accessToken: string
  refreshToken: string
}
