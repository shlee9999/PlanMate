import { SuggestRequestProps, createSuggest } from 'api/suggest/suggest'
import { useMutation } from 'react-query'

type UseCreateSuggestMutationProps = SuggestRequestProps & {
  callBack: () => void
}

/**건의사항 생성 */
function useCreateSuggestMutation() {
  const { mutate } = useMutation(
    ({ body, tag, title }: UseCreateSuggestMutationProps) => createSuggest({ body, tag, title }),
    {
      onSuccess: (data, { callBack }) => {
        callBack()
      },
      onError: (err) => {
        console.error(err)
      },
    }
  )
  return mutate
}
export default useCreateSuggestMutation
