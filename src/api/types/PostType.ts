/**게시물, 공지사항 Props
 * @param {ResponsePostType[]} postDtoList 해당 페이지 게시물 리스트
 * @param {ResponseNoticeType[]} noticeDtoList 해당 페이지 게시물 리스트
 * @param {number} pages 해당 게시물이 속한 페이지
 * @param {number} totalPages 게시물 총 페이지 수 (10 posts per page)
 * @param {number} commentCount 댓글 개수
 * @param {string} content 게시물 내용
 * @param {boolean} isMyHearted 게시물 좋아요 여부
 * @param {boolean} isMyScraped 게시물 스크랩 여부
 * @param {number} likeCount 게시물 좋아요 개수
 * @param {string} nickname 게시물 작성자 닉네임
 * @param {string} postTagList 게시물 태그 리스트
 * @param {string} scrapCount 게시물 스크랩 개수
 * @param {string} title 게시물 제목
 * @param {string} createdAt 게시물 만든 날짜 및 시간 YYYY-MM-DDTHH:MM:SS
 * @param {number} postId 게시물 id
 * @param {number} noticeId 공지사항 게시물 id
 * @param {string} tagName 태그 이름
 * @param {string[]} tagList 태그 리스트
 */
export type PostType = {
  /** 해당 페이지 게시물 리스트 */
  postDtoList: ResponsePostType[]
  /** 해당 페이지 공지사항 리스트 */
  noticeDtoList: ResponsePostType[]
  /** 해당 게시물이 속한 페이지 */
  pages: number
  /** 게시물 총 페이지 수 (10 posts per page) */
  totalPages: number
  /** 댓글 개수 */
  commentCount: number
  /** 게시물 내용 */
  content: string
  /** 게시물 좋아요 여부 */
  isMyHearted: boolean
  /** 게시물 스크랩 여부 */
  isMyScraped: boolean
  /** 게시물 좋아요 개수 */
  likeCount: number
  /** 게시물 작성자 닉네임 */
  nickname: string
  /** 게시물 태그 리스트 */
  postTagList: string[]
  /** 게시물 스크랩 개수 */
  scrapCount: number
  /** 게시물 제목 */
  title: string
  /** 게시물 만든 날짜 및 시간 YYYY-MM-DDTHH:MM:SS */
  createdAt: string
  /** 게시물 id */
  postId?: number
  /** 공지사항 게시물 id */
  noticeId?: number
  /** 태그 이름 */
  tagName: string
  /** 태그 리스트 */
  tagList: string[]
}

/** 공통 게시물, 공지사항 Response
 * @param {number} commentCount 댓글 개수
 * @param {string} content 게시물 내용
 * @param {boolean} isMyHearted 게시물 좋아요 여부
 * @param {boolean} isMyScraped 게시물 스크랩 여부
 * @param {number} likeCount 게시물 좋아요 개수
 * @param {string} nickname 게시물 작성자 닉네임
 * @param {string} postTagList 게시물 태그 리스트
 * @param {string} scrapCount 게시물 스크랩 개수
 * @param {string} title 게시물 제목
 * @param {string} createdAt 게시물 만든 날짜 및 시간 YYYY-MM-DDTHH:MM:SS
 * @param {number} postId? 게시물 id
 * @param {number} noticeId? 공지사항 게시물 id
 */
export type ResponsePostType = Pick<
  PostType,
  | 'commentCount'
  | 'content'
  | 'isMyHearted'
  | 'isMyScraped'
  | 'likeCount'
  | 'nickname'
  | 'postTagList'
  | 'scrapCount'
  | 'title'
  | 'createdAt'
  | 'postId'
  | 'noticeId'
>
export type ResponseNoticeType = Omit<ResponsePostType, 'postTagList'> & Pick<PostType, 'noticeId'>
