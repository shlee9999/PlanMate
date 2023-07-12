export type ResponsePostType = {
  commentCount: number
  content: string
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
  likeCount: number
  memberName: string
  updatedAt: string
}
