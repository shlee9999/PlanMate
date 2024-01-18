import { weekDays } from 'constants/week'
import { DateProps } from 'pages/Stats/StatsPage'
import { TimeProps } from 'types'

export const generateId = (): string => {
  const timestamp = Date.now().toString() // 현재 시간을 밀리초 단위로 가져옴
  const random = Math.random().toString().slice(2, 8) // 6자리 난수 생성
  return `${timestamp}-${random}` // 타임스탬프와 난수를 합쳐 고유한 ID 생성
}

export const numberUtils = {
  /**[num, num+1, ..., num+9] : 10개*/
  createTenSequentialNumbers: (num: number): number[] => Array.from({ length: 10 }, (_, index) => num + index),

  /**[n, n+1, ..., m] : (m - n + 1)개*/
  createSequentialNumbers: (n: number, m: number): number[] =>
    Array.from({ length: m - n + 1 }, (_, index) => n + index),
}
const calculateTimeParts = (time: number | TimeProps): { hour: number; minute: number; second: number } => {
  let hour: number, minute: number, second: number

  if (typeof time === 'number') {
    minute = Math.floor(time / 60) % 60
    second = Math.floor(time % 60)
    hour = Math.floor(time / 3600) % 24
  } else {
    hour = time.hour
    minute = time.minute
    second = time.second === undefined ? 0 : time.second
  }
  return { hour, minute, second }
}
const formatTwoDigits = (num: number): string => num.toString().padStart(2, '0')

export const timeUtils = {
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
  timeToSecond: ({ hour, minute, second }: TimeProps): number => +hour * 3600 + +minute * 60 + +second,
  /**time 대소 비교 */
  compareTime: (time1: number, time2: number) =>
    time1 > time2 ? { smaller: time2, larger: time1 } : { smaller: time1, larger: time2 },
}

/**targetDate까지 며칠 남았는지 */
export const daysUntil = (targetDate) => {
  const specificDate = new Date(targetDate)
  const today = new Date()
  specificDate.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  const differenceInTime = specificDate.getTime() - today.getTime()
  const differenceInDays = differenceInTime / (1000 * 3600 * 24)
  return differenceInDays
}

export const dateUtils = {
  /**같은 날짜인지 반환  */
  isEqual: (a: DateProps, b: DateProps) => a.year === b.year && a.month === b.month && a.date === b.date,
  /**Date -> {year, month, date}*/
  getDateProps: (currentDate: Date): DateProps => ({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    date: currentDate.getDate(),
  }),
  /**YYYY-MM-DD*/
  getYYYYMMDD: (currentDate: DateProps | Date) => {
    let year: number, month: number, date: number
    if (currentDate instanceof Date) {
      year = currentDate.getFullYear()
      month = currentDate.getMonth()
      date = currentDate.getDate()
    } else {
      year = currentDate.year
      month = currentDate.month - 1
      date = currentDate.date
    }
    return year + '-' + (month + 1).toString().padStart(2, '0') + '-' + date.toString().padStart(2, '0')
  },
  /**MM월 DD일 ?요일 */
  getFormattedDate: (currentDate: Date | string): string => {
    if (typeof currentDate === 'string') currentDate = new Date(currentDate)
    const month = `${currentDate.getMonth() + 1}`.padStart(2, '0')
    const date = `${currentDate.getDate()}`.padStart(2, '0')
    const dayIndex = currentDate.getDay()
    const formattedDate = month + '월 ' + date + '일 (' + weekDays[dayIndex] + ')요일'
    return formattedDate
  },
  /** 일요일 시작 달력에서 해당 month가 몇 주차까지 있는지 반환 */
  getWeekCount: (year: number, month: number) => {
    const firstOfMonth = new Date(year, month - 1, 1)
    const lastOfMonth = new Date(year, month, 0)
    const used = firstOfMonth.getDay() + lastOfMonth.getDate()
    return Math.ceil(used / 7)
  },
  /**한국 시간 기준 ISOString - UTC + 9시간*/
  getKoreanISOString: (date: Date) => {
    date.setHours(date.getHours() + 9)
    return date.toISOString()
  },
  /**일주일 동안의 Date 전부 구하기 */
  getWeekDates: (currentDate: Date) => {
    const firstDayOfWeek = new Date(currentDate)
    firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay())
    const weekDates: Date[] = []
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(firstDayOfWeek)
      newDate.setDate(firstDayOfWeek.getDate() + i)
      weekDates.push(newDate)
    }
    return weekDates
  },
}
