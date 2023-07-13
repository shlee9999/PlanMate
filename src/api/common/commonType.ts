export type ResponsePostType = {
  commentCount: number
  content: string
  isMyHearted: boolean
  isMyScraped: boolean
  likeCount: number
  nickname: string
  postId: number
  postTagList: string[]
  scrapCount: number
  title: string
  updatedAt: string
}

export type ResponseCommentType = {
  commentId: number
  content: string
  isAuthor: boolean
  isMyHearted: boolean
  likeCount: number
  memberName: string
  updatedAt: string
}
