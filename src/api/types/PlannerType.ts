/** 플래너 Props
 * @param {string} scheduleName -일정 이름
 * @param {number} plannerId - 일정 Id
 * @param {string} colorHex - 일정 배경색
 * @param {string} day - 날짜 YYYY-MM-DD
 * @param {string} startAt - 시작 시각 HH:MM:SS
 * @param {string} endAt - 종료 시각 HH:MM:SS
 */
export type PlannerType = {
  /**일정 이름*/
  scheduleName: string
  /**일정 Id*/
  plannerId: number
  /**일정 배경색*/
  colorHex: string
  /**날짜 YYYY-MM-DD*/
  day: string
  /**시작 시각 HH:MM:SS*/
  startAt: string
  /**종료 시각 HH:MM:SS*/
  endAt: string
}
