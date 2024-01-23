/**통계 Props
 * @param {string} targetDate D-Day
 * @param {string} title 일정 제목
 * @param {string} date 일정 날짜
 * @param {number} remainingDays D-Day까지 남은 일자
 * @param {number} scheduleId scheduleId
 * @param {boolean} isFixed 고정됐는지 여부
 * @param {number} memberId 사용자 id
 */

export type ScheduleType = {
  /** D-Day YYYY-MM-DD */
  targetDate: string
  /** 일정 제목 */
  title: string
  /** D-Day까지 남은 일자 */
  remainingDays: number
  /** D-Day id */
  scheduleId: number
  /** 고정됐는지 여부 */
  isFixed: boolean
  /** 사용자 id */
  memberId: number
}

export type DDayType = Pick<ScheduleType, 'scheduleId' | 'memberId' | 'targetDate' | 'title' | 'isFixed'>
