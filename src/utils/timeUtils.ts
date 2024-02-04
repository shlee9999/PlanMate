import { TimeProps } from 'types'
import { formatTwoDigits } from '.'

/**시간 관련 함수 모음 */
export const timeUtils = {
  isEqualTime: (a: TimeProps, b: TimeProps): boolean =>
    a.hour === b.hour && a.minute === b.minute && a.second === b.second,
  /**초 단위, HH:MM:SS -> TimeProps ({ hour, minute, second })로 반환.
   * {hour, minute}를 넣으면 second=0으로 반환
   */
  getTimeProps: (time: number | TimeProps | Date | string): TimeProps => {
    let hour: number, minute: number, second: number
    if (time instanceof Date) time = time.toTimeString()
    if (typeof time === 'number') {
      hour = Math.floor(time / 3600) % 24
      minute = Math.floor(time / 60) % 60
      second = Math.floor(time % 60)
    } else if (typeof time === 'string') {
      //* HH:MM:SS
      hour = +time.slice(0, 2)
      minute = +time.slice(3, 5)
      second = +time.slice(6, 8)
    } else {
      hour = time.hour
      minute = time.minute
      second = time.second ?? 0 //* second 없을 경우
    }
    return { hour, minute, second }
  },
  /**현재 시각 HH:MM:SS 반환 */
  getCurrentTime: () => new Date().toTimeString().slice(0, 8),

  /**HH:MM:SS로 변환*/
  getFormattedTime: (time: number | TimeProps): string => {
    const { hour, minute, second } = timeUtils.getTimeProps(time)
    return `${formatTwoDigits(hour)}:${formatTwoDigits(minute)}:${formatTwoDigits(second)}`
  },
  /**HH시간 MM분( SS초)*/
  getFormattedTimeKorean: (time: number | TimeProps): string => {
    const { hour, minute, second } = timeUtils.getTimeProps(time)
    let formattedTime = `${formatTwoDigits(hour)}시간 ${formatTwoDigits(minute)}분`
    if (second !== undefined) formattedTime += ` ${formatTwoDigits(second)}초`
    return formattedTime
  },
  /**startAt, endAt 차이 HH:MM:SS로 반환*/
  getStudyTime: (startAt: string, endAt: string): string => {
    let hour = +endAt.slice(0, 2) - +startAt.slice(0, 2)
    let minute = +endAt.slice(3, 5) - +startAt.slice(3, 5)
    let second = +endAt.slice(6, 8) - +startAt.slice(6, 8)

    if (second < 0) {
      second += 60
      minute -= 1
    }

    if (minute < 0) {
      minute += 60
      hour -= 1
    }
    return `${formatTwoDigits(hour)}:${formatTwoDigits(minute)}:${formatTwoDigits(second)}`
  },

  /**총 몇 초인지 반환 */
  timeToSecond: ({ hour = 0, minute = 0, second = 0 }: TimeProps): number =>
    Math.floor(+hour * 3600) + Math.floor(+minute * 60) + Math.floor(+second.toFixed()),
  /**time 대소 비교 */
  compareTime: (time1: number, time2: number) =>
    time1 > time2 ? { smaller: time2, larger: time1 } : { smaller: time1, larger: time2 },
}
