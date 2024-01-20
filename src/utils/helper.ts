/**랜덤 id 생성 */
export const generateId = (): string => {
  const timestamp = Date.now().toString() // 현재 시간을 밀리초 단위로 가져옴
  const random = Math.random().toString().slice(2, 8) // 6자리 난수 생성
  return `${timestamp}-${random}` // 타임스탬프와 난수를 합쳐 고유한 ID 생성
}

/**한 자리수 number 2자리수 문자로 반환 ex) 0 -> "00" */
export const formatTwoDigits = (num: number): string => num.toString().padStart(2, '0')
