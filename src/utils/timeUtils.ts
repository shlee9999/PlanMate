import { TimeProps } from 'types'
import { formatTwoDigits } from '.'

/**시간 관련 함수 모음 */
export const timeUtils = {
  isEqualTime: (a: TimeProps, b: TimeProps): boolean => {
    return a.hour === b.hour && a.minute === b.minute && a.second === b.second
  },
  /**HH:MM:SS*/
  getFormattedTime: (time: number | TimeProps): string => {
    const { hour, minute, second } = calculateTimeParts(time)
    return `${formatTwoDigits(hour)}:${formatTwoDigits(minute)}:${formatTwoDigits(second)}`
  },
  /**HH시간 MM분( SS초)*/
  getFormattedTimeKorean: (time: number | TimeProps): string => {
    const { hour, minute, second } = calculateTimeParts(time)
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
} /**TimeProps ({ hour, minute, second })로 변횐 */

const calculateTimeParts = (time: number | TimeProps): { hour: number; minute: number; second: number } => {
  let hour: number, minute: number, second: number

  if (typeof time === 'number') {
    minute = Math.floor(time / 60) % 60
    second = Math.floor(time % 60)
    hour = Math.floor(time / 3600) % 24
  } else {
    hour = time.hour
    minute = time.minute
    second = time.second ?? 0
  }
  return { hour, minute, second }
}
