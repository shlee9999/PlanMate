import { weekDays } from 'constants/week'
import { DateProps } from 'pages/Stats/StatsPage'

/**날짜 관련 함수 모음 */
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
}
