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

export enum QueryKeys {
  //* Timer
  todoList,
  timeInfo,
  fixedDDay,
  //* Stats
  todayStats,
  //* Planner - Scheduler
  plannerData,
  //* ExamInfo
  findAllResponse, //*ExamInfoPage
  detailData, //* Detail
  commentData,
  examInfo,
  replyList, //*Comment

  //*MyPage
  dDayList,
  myPostInfo,
  myScrapInfo,
  myCommentInfo,
}
