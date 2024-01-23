import { weekDays } from 'constants/week'
import { DateProps } from 'types'

export const dateUtils = {
  /**미래 시간인지 반환 */
  isFuture: (targetDate: Date): boolean => {
    const currentDate = new Date()
    return targetDate > currentDate
  },
  /**같은 날짜인지 반환  */
  isEqual: (a: DateProps, b: DateProps) => a.year === b.year && a.month === b.month && a.date === b.date,
  /**Date 또는 string(YYYY-MM-DD) -> {year, month, date} month+1 하지 않는다. 1월을 0월로 반환*/
  getDateProps: (currentDate: Date | string): DateProps => {
    if (currentDate instanceof Date) {
      return {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
        date: currentDate.getDate(),
      }
    } else if (typeof currentDate === 'string') {
      // YYYY-MM-DD
      return {
        year: +currentDate.slice(0, 4),
        month: +currentDate.slice(5, 7) - 1,
        date: +currentDate.slice(8, 10),
      }
    }
  },
  /**YYYY-MM-DD
   * 2024년 1월 23일 기준
   * @example
   * dateUtils.getYYYYMMDD(new Date(2024, 0, 23))
   * 반환값 : "2024-01-23"
   * @example
   * dateUtils.getYYYYMMDD({
   *    year: 2024,
   *    month: 0 + 1, //1월이면 1을 넣어준다. DateProps는 month-1로 저장돼 있으므로, 애초에 1을 더해서 줘야 반환값이 제대로 나온다.
   *    date: 23
   * })
   * 반환값 : "2024-01-23"
   * DateProps로 넣어줄 경우 month가 -1된 상태이므로 month+1 넣어줘야 함
   *
   */
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
  /**targetDate까지 며칠 남았는지 */
  daysUntil: (targetDate) => {
    const specificDate = new Date(targetDate)
    const today = new Date()
    specificDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    const differenceInTime = specificDate.getTime() - today.getTime()
    const differenceInDays = differenceInTime / (1000 * 3600 * 24)
    return differenceInDays
  },
  /**년/월/일 더하기 */
  getFutureDateProps: (currentDateProps: DateProps, type: 'year' | 'month' | 'date', amount = 1): DateProps => {
    const currentDate = new Date(currentDateProps.year, currentDateProps.month, currentDateProps.date)
    if (type === 'year') {
      currentDate.setFullYear(currentDateProps.year + amount)
    }
    if (type === 'month') {
      currentDate.setMonth(currentDateProps.month + amount)
    }
    if (type === 'date') {
      currentDate.setDate(currentDateProps.date + amount)
    }
    return dateUtils.getDateProps(currentDate)
  },
}
