/**랜덤 id 생성 */
export const generateId = (): string => {
  const timestamp = Date.now().toString() // 현재 시간을 밀리초 단위로 가져옴
  const random = Math.random().toString().slice(2, 8) // 6자리 난수 생성
  return `${timestamp}-${random}` // 타임스탬프와 난수를 합쳐 고유한 ID 생성
}

/**한 자리수 number 2자리수 문자로 반환 ex) 0 -> "00" */
export const formatTwoDigits = (num: number): string => num.toString().padStart(2, '0')

/**
 * 색상의 투명도만 변경
 * color: '#FEC107' 형식의 문자열
 * opacity: 새로운 투명도 값 (0.0 ~ 1.0)
 */
export const changeColorOpacity = (color, opacity) => {
  // 색상 값에서 마지막 쉼표 이후 부분을 새로운 투명도 값으로 대체
  const rgba = rgbaList[color]
  return rgba.replace(/[^,]+(?=\))/, opacity)
}

const rgbaList = {
  '#FEC107': 'rgba(254, 193, 7, 1.0)',
  '#F1C40F': 'rgba(241, 196, 15, 1.0)',
  '#FFEB3C': 'rgba(255, 235, 60, 1.0)',
  '#CDDC39': 'rgba(205, 220, 57, 1.0)',
  '#8BC24A': 'rgba(139, 194, 74, 1.0)',
  '#2DCC70': 'rgba(45, 204, 112, 1.0)',
  '#4CB050': 'rgba(76, 176, 80, 1.0)',
  '#27AE61': 'rgba(39, 174, 97, 1.0)',
  '#006B61': 'rgba(0, 107, 97, 1.0)',
  '#16A086': 'rgba(22, 160, 134, 1.0)',
  '#1BBC9B': 'rgba(27, 188, 155, 1.0)',
  '#00BCD5': 'rgba(0, 188, 213, 1.0)',
  '#03A9F5': 'rgba(3, 169, 245, 1.0)',
  '#2196F3': 'rgba(33, 150, 243, 1.0)',
  '#3598DB': 'rgba(53, 152, 219, 1.0)',
  '#297FB8': 'rgba(41, 127, 184, 1.0)',
  '#3F51B5': 'rgba(63, 81, 181, 1.0)',
  '#673BB7': 'rgba(103, 59, 183, 1.0)',
  '#9C28B1': 'rgba(156, 40, 177, 1.0)',
  '#8C45AD': 'rgba(140, 69, 173, 1.0)',
  '#9A59B5': 'rgba(154, 89, 181, 1.0)',
}
