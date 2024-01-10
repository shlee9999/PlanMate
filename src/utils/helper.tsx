import { week } from 'constants/week'

export const generateId = (): string => {
  const timestamp = Date.now().toString() // 현재 시간을 밀리초 단위로 가져옴
  const random = Math.random().toString().slice(2, 8) // 6자리 난수 생성
  return `${timestamp}-${random}` // 타임스탬프와 난수를 합쳐 고유한 ID 생성
}
export const useFormattedTime = (time: number | { hour: number; minute: number; second: number }): string => {
  let hour: number, minute: number, second: number

  if (typeof time === 'number') {
    minute = Math.floor(time / 60) % 60
    second = Math.floor(time % 60)
    hour = Math.floor(time / 3600) % 24
  } else {
    hour = time.hour
    minute = time.minute
    second = time.second
  }

  const formattedTime: string =
    hour.toString().padStart(2, '0') +
    ':' +
    minute.toString().padStart(2, '0') +
    ':' +
    second.toString().padStart(2, '0')
  return formattedTime
}

export const useFormattedTimeKorean = (time: number | { hour: number; minute: number; second?: number }): string => {
  let hour: number, minute: number, second: number

  if (typeof time === 'number') {
    minute = Math.floor(time / 60) % 60
    second = Math.floor(time % 60)
    hour = Math.floor(time / 3600) % 24
  } else {
    hour = time.hour
    minute = time.minute
    second = time.second
  }

  let formattedTime: string = hour.toString().padStart(2, '0') + '시간 ' + minute.toString().padStart(2, '0') + '분'

  if (second !== undefined) {
    formattedTime += ' ' + second.toString().padStart(2, '0') + '초'
  }
  return formattedTime
}

export const useFormattedDate = (currentDate: Date): string => {
  const month: string = `${currentDate.getMonth() + 1}`.padStart(2, '0')
  const date: string = `${currentDate.getDate()}`.padStart(2, '0')
  const day: number = currentDate.getDay()
  const formattedDate: string = month + '월 ' + date + '일 (' + week[day] + ')요일'
  return formattedDate
}

export const generateArray = (num: number) => {
  const arr: number[] = []
  for (let i = num; i < num + 10; i++) {
    arr.push(i)
  }
  return arr
}
export const getStudyTime = (startAt: string, endAt: string): string => {
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
  const format = (num: number) => (num < 10 ? '0' : '') + num
  const studyTime = format(hour) + ':' + format(minute) + ':' + format(second)
  return studyTime
}

export const timeToSecond = (hour, minutes, seconds): number => {
  return +hour * 60 * 60 + +minutes * 60 + +seconds
}

export const daysUntil = (targetDate) => {
  const specificDate = new Date(targetDate)
  const today = new Date()
  specificDate.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  const differenceInTime = specificDate.getTime() - today.getTime()
  const differenceInDays = differenceInTime / (1000 * 3600 * 24)
  return differenceInDays
}
export function createArray(n, m) {
  return Array.from({ length: m - n + 1 }, (_, index) => n + index)
}
export const getWeekDates = (currentDate: Date) => {
  const firstDayOfWeek = new Date(currentDate)
  firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay())
  const weekDates: Date[] = []
  for (let i = 0; i < 7; i++) {
    const newDate = new Date(firstDayOfWeek)
    newDate.setDate(firstDayOfWeek.getDate() + i)
    weekDates.push(newDate)
  }
  return weekDates
}

export const getDateInfo = (currentDate: Date) => ({
  year: currentDate.getFullYear(),
  month: currentDate.getMonth(),
  date: currentDate.getDate(),
})

export const getDateSaveForm = (currentDate: Date) => {
  const { year, month, date } = getDateInfo(currentDate)
  return year + month.toString().padStart(2, '0') + date.toString().padStart(2, '0')
}
