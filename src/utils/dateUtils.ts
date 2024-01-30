import { weekDays } from 'constants/week'
import { DateProps } from 'types'

/**
 * 혼선이 없도록 항상 입력값으로 우리가 편한 month를 넣는거로 하겠다.
 * getDateProps를 제외한 입력은 항상 DateProps다.
 * 결괏값도 넣은 month 그대로를 반환한다.
 * month - 1이 필요하다면, 애초에 month - 1 로 넣을 것
 * 모든 계산은 혼선이 없도록 DateProps로 바꿔서 한다.
 * 2024-01-31 = { year:2024, month:1, date: 1 }
 */
export const dateUtils = {
  getDateProps: (currentDate: Date | string | DateProps): DateProps => {
    let year, month, date
    if (currentDate instanceof Date) {
      year = currentDate.getFullYear()
      month = currentDate.getMonth() + 1 // 1을 더해야 우리가 보는 숫자
      date = currentDate.getDate()
    } else if (typeof currentDate === 'string') {
      // YYYY-MM-DD
      year = +currentDate.slice(0, 4)
      month = +currentDate.slice(5, 7) // 보는 그대로
      date = +currentDate.slice(8, 10)
    }
    return { year, month, date }
  },
  getTodayDateProps: () => dateUtils.getDateProps(new Date()),
  isToday: (targetDateProps: DateProps) => {
    const todayDateProps = dateUtils.getDateProps(new Date())
    return dateUtils.isEqual(targetDateProps, todayDateProps)
  },
  /**같은 날짜인지 반환  */
  isEqual: (a: DateProps, b: DateProps) => a.year === b.year && a.month === b.month && a.date === b.date,
  /**Date 또는 string(YYYY-MM-DD) -> {year, month, date} month+1 하지 않는다. 1월을 0월로 반환*/
  /**미래 시간인지 반환 */
  isFuture: (targetDateProps: DateProps): boolean => {
    const targetDate = dateUtils.getDateEntity(targetDateProps)
    const currentDate = new Date()
    return targetDate > currentDate
  },
  isTodayOrFuture: (targetDateProps: DateProps): boolean => {
    const targetDate = dateUtils.getDateEntity(targetDateProps)
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() - 1) //* 어제로 되돌려서 isFuture 판단
    return targetDate > currentDate
  },

  getYYYYMMDD: (targetDateProps: DateProps) => {
    const { year, month, date } = targetDateProps
    return year + '-' + month.toString().padStart(2, '0') + '-' + date.toString().padStart(2, '0')
  },
  getDay: (targetDateProps: DateProps): number => {
    return dateUtils.getDateEntity(targetDateProps).getDay()
  },
  /**MM월 DD일 ?요일 */
  getFormattedDate: (targetDateProps: DateProps): string => {
    const dayIndex = dateUtils.getDay(targetDateProps)
    const { month, date } = targetDateProps
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
  getDateEntity: (targetDateProps: DateProps) =>
    new Date(targetDateProps.year, targetDateProps.month - 1, targetDateProps.date),
  /**한국 시간 기준 ISOString - UTC + 9시간*/
  getKoreanISOString: (targetDate: DateProps) => {
    const date = dateUtils.getDateEntity(targetDate)
    date.setHours(date.getHours() + 9)
    return date.toISOString()
  },
  /**일주일 동안의 Date 전부 구하기 */
  getWeekDates: (targetDateProps: DateProps): DateProps[] => {
    const targetDate = dateUtils.getDateEntity(targetDateProps)
    const firstDayOfWeek = new Date(targetDate)
    firstDayOfWeek.setDate(targetDate.getDate() - targetDate.getDay())
    const weekDates: DateProps[] = []
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(firstDayOfWeek)
      newDate.setDate(firstDayOfWeek.getDate() + i)
      weekDates.push(dateUtils.getDateProps(newDate))
    }
    return weekDates
  },
  /**targetDate까지 며칠 남았는지 */
  daysUntil: (targetDateProps: DateProps) => {
    const targetDate = dateUtils.getDateEntity(targetDateProps)
    const today = new Date()
    targetDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)

    const diffTime = targetDate.getTime() - today.getTime()
    const differenceInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return differenceInDays
  },

  /**년/월/일 더하기 */
  calculateDateProps: (currentDateProps: DateProps, type: 'year' | 'month' | 'date', amount): DateProps => {
    const targetDate = dateUtils.getDateEntity(currentDateProps)
    console.log('Before', targetDate)

    if (type === 'year') targetDate.setFullYear(targetDate.getFullYear() + amount)
    else if (type === 'month') targetDate.setMonth(targetDate.getMonth() + amount)
    else if (type === 'date') targetDate.setDate(targetDate.getDate() + amount)
    console.log('After', targetDate)

    return dateUtils.getDateProps(targetDate)
  },
}
