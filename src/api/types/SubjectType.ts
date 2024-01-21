/**타이머 과목 Props
 * @param {string} colorHex 과목 색상
 * @param {string} name 과목 이름
 * @param {number} subjectId 과목 id
 * @param {number} studyTimeHours 공부 시간
 * @param {number} studyTimeMinutes 공부 분
 * @param {number} studyTimeSeconds 공부 초
 * @param {string} startAt 공부 시작 시간 HH:MM:SS
 * @param {string} endAt 공부 마친 시간 HH:MM:SS
 */

export type SubjectType = {
  /**과목 색상 */
  colorHex: string
  /**과목 이름 */
  name: string
  /**과목 id */
  subjectId: number
  /**공부 시간 */
  studyTimeHours: number
  /**공부 분*/
  studyTimeMinutes: number
  /**공부 초*/
  studyTimeSeconds: number
  /**공부 시작 시간 HH:MM:SS */
  startAt: string
  /**공부 마친 시간 HH:MM:SS */
  endAt: string
}
