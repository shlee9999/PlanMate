/**공부 통계 Props */
export type StatsType = {
  /**공부 연도 */
  year: number
  /**공부 월 */
  month: number
  /**공부 일 */
  date: number
  /**YYYY-MM-DD */
  yearMonth: string
}

export type ResponseStats = {
  /**공부 마친 시간 */
  endAtHours: number
  /**공부 마친 분 */
  endAtMinutes: number
  /**최대 집중 시간 */
  maxStudyTimeHours: number
  /**최대 집중 분 */
  maxStudyTimeMinutes: number
  /**최대 집중 초 */
  maxStudyTimeSeconds: number
  /**휴식 시간 */
  restTimeHours: number
  /**휴식 분 */
  restTimeMinutes: number
  /**휴식 초 */
  restTimeSeconds: number
  /**공부 시작 시간 */
  startAtHours: number
  /**공부 시작 분 */
  startAtMinutes: number
  /**공부한 과목별 정보 */
  studyTimeList: StudyTimeEntry[]
  /**총 공부 시간 */
  totalStudyTimeHours: number
  /**총 공부 분 */
  totalStudyTimeMinutes: number
  /**총 공부 초 */
  totalStudyTimeSeconds: number
}

export type StudyTimeEntry = {
  /**과목 이름 */
  name: string
  /**공부 시간 */
  studyTimeHours: number
  /**공부 분 */
  studyTimeMinutes: number
  /**공부 초 */
  studyTimeSeconds: number
}
