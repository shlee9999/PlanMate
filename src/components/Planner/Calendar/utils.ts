// export const range = (keyCount) => [...Array(keyCount).keys()]

export const areDatesSame = (first: Date, second: Date): boolean => {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  )
}

export const addDateBy = (date: Date, count: number): Date => {
  const d = new Date(date)
  return new Date(d.setDate(d.getDate() + count))
}

export const getMonday = (): Date => {
  const today = new Date()
  const first = today.getDate() - today.getDay() + 1
  return new Date(today.setDate(first))
}

export const areDaySame = (first: number, second: number): boolean => {
  return first === second
}
