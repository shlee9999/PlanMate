import { ResponseCommentType } from 'api/common/commonType'

export type TodoItemType = {
  colorHex: string
  name: string
  subjectId: number
  time: number
}

export type PageInfo = {
  title: string
  url: string
}

export interface TimeProps {
  hour: number
  minute: number
  second?: number
}

//apis
/** 댓글 Props
 * @param {string} content - 댓글 내용
 * @param {number} postId - 댓글이 속한 게시물 ID
 * @param {number} currentPage - 현재 페이지 번호
 * @param {Function} callBack - 뮤테이션 후 실행할 콜백 함수
 * @param {number} commentId - 수정할 댓글 ID
 * @param {boolean} isAuthor - 댓글 작성자가 게시물 작성자인지
 * @param {boolean} isMyHearted - 댓글 좋아요를 눌렀는지
 * @param {number} likeCount - 댓글 좋아요 개수
 * @param {string} memberName - 댓글 작성자 닉네임
 * @param {string} updatedAt - 댓글 업데이트 시간 YYYY-MM-DDTHH:mm:ss.sssZ
 * @param {number} parentCommentId - 부모 댓글 id
 * @param {number} parentCommentId: - number
 * @param {number} pages: - number 요청할 페이지 번호
 * @param {number} totalCount: - number 총 댓글 개수
 * @param {number} totalPages: - number 총 댓글 페이지 수
 * @param {ResponseCommentType[]} - 댓글
 */
export type CommentType = {
  /**댓글 내용*/
  content: string
  /**댓글이 속한 게시물 ID*/
  postId: number
  /**현재 페이지 번호*/
  currentPage: number
  /**뮤테이션 후 실행할 콜백 함수*/
  callBack: () => void
  /**수정할 댓글 ID*/
  commentId: number
  /**댓글 작성자가 게시물 작성자인지*/
  isAuthor: boolean
  /**댓글 좋아요를 눌렀는지*/
  isMyHearted: boolean
  /**댓글 좋아요 개수*/
  likeCount: number
  /**댓글 작성자 닉네임*/
  memberName: string
  /**댓글 업데이트 시간 YYYY-MM-DDTHH:mm:ss.sssZ*/
  updatedAt: string
  /**부모 댓글 id*/
  parentCommentId: number
  /**요청할 페이지 번호 */
  pages: number
  /**총 댓글 개수 */
  totalCount: number
  /**총 댓글 페이지 수 */
  totalPages: number
  /**댓글  */
  commentDtoList: ResponseCommentType[]
}

/** 플래너 Props
 * @param {string} scheduleName -일정 이름
 * @param {number} plannerId - 일정 Id
 * @param {string} colorHex - 일정 배경색
 * @param {string} day - 날짜 YYYY-MM-DD
 * @param {string} startAt - 시작 시각 HH:MM:SS
 * @param {string} endAt - 종료 시각 HH:MM:SS
 */
export type PlannerType = {
  /**일정 이름*/
  scheduleName: string
  /**일정 Id*/
  plannerId: number
  /**일정 배경색*/
  colorHex: string
  /**날짜 YYYY-MM-DD*/
  day: string
  /**시작 시각 HH:MM:SS*/
  startAt: string
  /**종료 시각 HH:MM:SS*/
  endAt: string
}
