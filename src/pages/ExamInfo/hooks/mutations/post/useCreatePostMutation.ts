import { CreatePostRequestProps, createPost } from 'api/post/createPost'
import { FindAllPostResponseProps } from 'api/post/find/findAll'
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
  const nickname = useSelector((state: RootState) => state.userAuthInfo.name)
  const { mutate } = useMutation(
    ({ content, tagList, title }: UseCreatePostMutationProps) => createPost({ content, tagList, title }),
    {
      onMutate: ({ content, tagList, title }) => {
        const prevData = queryClient.getQueryData(['findAllResponse', 1, ''])
        console.log(prevData)
        queryClient.setQueryData<FindAllPostResponseProps>(['findAllResponse', 1, ''], (prev) => ({
          ...prev,
          postDtoList: [
            ...prev.postDtoList,
            {
              content,
              isMyHearted: false,
              isMyScraped: false,
              likeCount: 0,
              nickname,
              postTagList: tagList,
              scrapCount: 0,
              title,
              createdAt: dateUtils.getKoreanISOString(new Date()),
              postId: new Date().getTime(),
              isMyPost: true,
              commentCount: 0,
            },
          ],
        }))
        return { prevData }
      },
      onSuccess: (data, { callBack }) => {
        console.log('success')
        //* 만드는데 성공하면 id값을 백엔드에 맞게 바꿔준다.

        queryClient.setQueryData<FindAllPostResponseProps>(['findAllResponse', 1, ''], (prev) => {
          const createdPost = { ...prev.postDtoList[prev.postDtoList.length - 1] }
          createdPost.postId = data.postId
          return {
            ...prev,
            postDtoList: [...prev.postDtoList.slice(0, -1), createdPost],
          }
        })
        callBack()
      },
      onError: (err, data, context) => {
        queryClient.setQueryData(['findAllResponse', 1, ''], context.prevData)
        console.error(err)
      },
    }
  )
  return mutate
}
export default useCreatePostMutation
