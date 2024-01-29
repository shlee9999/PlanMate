/**숫자 관련 함수 모음 */
export const numberUtils = {
  /**[num, num+1, ..., num+9] : 10개*/
  createTenSequentialNumbers: (num: number): number[] => Array.from({ length: 10 }, (_, index) => num + index),

  /**[n, n+1, ..., m] : (m - n + 1)개*/
  createSequentialNumbers: (n: number, m: number): number[] =>
    Array.from({ length: m - n + 1 }, (_, index) => n + index),
  createPaginationNumbers: (currentPage, totalPage) => {
    if (totalPage === 0) totalPage = 1
    let start, end
    if (totalPage <= 10) {
      // 총 페이지 수가 10 이하인 경우 모든 페이지 번호 표시
      start = 1
      end = totalPage
    } else {
      // currentPage 주변에 페이지 번호를 표시
      start = Math.max(currentPage - 4, 1)
      end = Math.min(start + 9, totalPage)

      // start가 1보다 크고 end가 totalPage에 도달하지 않은 경우, end를 조정
      if (start > 1 && end < totalPage) {
        start = Math.max(end - 9, 1)
      }
      if (start > totalPage - 9) {
        start = totalPage - 9
      }
    }
    return numberUtils.createSequentialNumbers(start, end)
  },
}
