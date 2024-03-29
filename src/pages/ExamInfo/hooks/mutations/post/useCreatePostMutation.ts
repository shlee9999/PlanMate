import { CreatePostRequestProps, createPost } from 'api/post/createPost'
import { FindAllPostResponseProps } from 'api/post/find/findAll'
import { QueryKeys } from 'types'
import { RootState } from 'modules'
import { useMutation, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { dateUtils } from 'utils'

type UseCreatePostMutationProps = CreatePostRequestProps & {
  callBack: () => void
}

/**게시물 생성 */
function useCreatePostMutation() {
  const queryClient = useQueryClient()
  const nickname = useSelector((state: RootState) => state.userAuthInfo.nickname)
  const { mutate } = useMutation(
    ({ content, tagList, title }: UseCreatePostMutationProps) => createPost({ content, tagList, title }),
    {
      onMutate: ({ content, tagList, title }) => {
        const prevData = queryClient.getQueryData<FindAllPostResponseProps>([QueryKeys.findAllResponse, 1, ''])
        if (!prevData || !prevData.postDtoList) return { prevData: { ...prevData, postDtoList: [] } }
        const newPost = {
          content,
          isMyHearted: false,
          isMyScraped: false,
          likeCount: 0,
          nickname,
          postTagList: tagList,
          scrapCount: 0,
          title,
          createdAt: dateUtils.getKoreanISOString(dateUtils.getTodayDateProps()),
          postId: new Date().getTime(),
          isMyPost: true,
          commentCount: 0,
        }
        queryClient.setQueryData<FindAllPostResponseProps>([QueryKeys.findAllResponse, 1, ''], (prev) => ({
          ...prev,
          postDtoList: [newPost, ...prev.postDtoList.slice(0, 9)],
        }))
        return { prevData }
      },
      onSuccess: (data, { callBack }, context) => {
        console.log('success')
        if (context.prevData.postDtoList.length !== 0)
          //* 만드는데 성공하면 id값을 백엔드에 맞게 바꿔줌
          queryClient.setQueryData<FindAllPostResponseProps>([QueryKeys.findAllResponse, 1, ''], (prev) => {
            const createdPost = { ...prev.postDtoList[0] }
            createdPost.postId = data.postId
            return {
              ...prev,
              postDtoList: [createdPost, ...context.prevData.postDtoList],
            }
          })
        callBack()
      },
      onError: (err, data, context) => {
        queryClient.setQueryData([QueryKeys.findAllResponse, 1, ''], context.prevData)
        console.error(err)
      },
    }
  )
  return mutate
}
export default useCreatePostMutation
