import { FindAllPostResponseProps } from 'api/post/find/findAll'
import { ExamInfoDetailDataType } from 'types'

export const sampleInfoList: FindAllPostResponseProps = {
  postDtoList: [
    {
      commentCount: 0,
      title: '예시',
      likeCount: 5,
      scrapCount: 2,
      nickname: '닉네임',
      postId: 1,
      postTagList: ['태그1'],
      createdAt: '2023-06-12',
      content: '컨텐츠1',
      isMyHearted: false,
      isMyScraped: false,
    },
    {
      commentCount: 0,
      title: '예시',
      likeCount: 5,
      scrapCount: 2,
      nickname: '닉네임',
      postId: 2,
      postTagList: ['태그1'],
      createdAt: '2023-06-12',
      content: '컨텐츠2',
      isMyHearted: false,
      isMyScraped: false,
    },
    {
      commentCount: 0,
      title: '예시',
      likeCount: 5,
      scrapCount: 2,
      nickname: '닉네임',
      postId: 3,
      postTagList: ['태그1'],
      createdAt: '2023-06-12',
      content: '컨텐츠3',
      isMyHearted: false,
      isMyScraped: false,
    },
  ],

  totalPages: 1,
}

export const sampleReplyList = {
  replyList: [
    {
      commentId: 0,
      content: '답글 내용',
      isAuthor: false,
      isMyHearted: false,
      likeCount: 0,
      memberName: '이성훈',
      updatedAt: '2023-08-23',
    },
    {
      commentId: 0,
      content: '답글 내용',
      isAuthor: false,
      isMyHearted: false,
      likeCount: 0,
      memberName: '이성훈',
      updatedAt: '2023-08-23',
    },
    {
      commentId: 0,
      content: '답글 내용',
      isAuthor: false,
      isMyHearted: false,
      likeCount: 0,
      memberName: '이성훈',
      updatedAt: '2023-08-23',
    },
  ],
}

export const sampleExamInfoData: ExamInfoDetailDataType = {
  checkPostResult: {
    commentCount: 0,
    title: '예시',
    likeCount: 5,
    scrapCount: 2,
    nickname: '닉네임',
    postId: 3,
    postTagList: ['태그1'],
    createdAt: '2023-06-12',
    content: '컨텐츠3',
    isMyHearted: false,
    isMyScraped: false,
  },
  findAllCommentsResult: {
    commentDtoList: [
      {
        postId: 0,
        commentId: 0,
        content: '댓글 내용',
        isAuthor: false,
        isMyHearted: false,
        likeCount: 0,
        memberName: '이성훈',
        updatedAt: '2023-08-23',
      },
      {
        postId: 0,
        commentId: 0,
        content: '댓글 내용',
        isAuthor: false,
        isMyHearted: false,
        likeCount: 0,
        memberName: '이성훈',
        updatedAt: '2023-08-23',
      },
      {
        postId: 0,
        commentId: 0,
        content: '댓글 내용',
        isAuthor: false,
        isMyHearted: false,
        likeCount: 0,
        memberName: '이성훈',
        updatedAt: '2023-08-23',
      },
    ],
    totalPages: 1,
  },
}
