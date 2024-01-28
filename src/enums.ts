export enum StatsContainerType {
  timer,
  stats,
}

export enum ViewportType {
  XLARGE = 'XLARGE',
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export enum QueryKeyType {
  //* Timer
  todoList = 'todoList',
  timeInfo = 'timeInfo',
  fixedDday = 'fixedDday',
  //* Stats
  todayStats = 'todayStats',
  //* Planner - Scheduler
  plannerData = 'plannerData',
  //* ExamInfo
  findAllResponse = 'findAllResponse', //*ExamInfoPage
  detailData = 'detailData', //* Detail
  commentData = 'commentData',
  examInfo = 'examInfo',
  replyList = 'replyList', //*Comment

  //*MyPage
  dDayList = 'dDayList',
  myPostInfo = 'myPostInfo',
  myScrapInfo = 'myScrapInfo',
  myCommentInfo = 'myCommentInfo',
}
