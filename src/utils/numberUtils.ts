/**숫자 관련 함수 모음 */
export const numberUtils = {
  /**[num, num+1, ..., num+9] : 10개*/
  createTenSequentialNumbers: (num: number): number[] => Array.from({ length: 10 }, (_, index) => num + index),

  /**[n, n+1, ..., m] : (m - n + 1)개*/
  createSequentialNumbers: (n: number, m: number): number[] =>
    Array.from({ length: m - n + 1 }, (_, index) => n + index),
}
