import { AddDdayRequestProps, addDday } from 'api/dday/addDday'
import { useQueryClient, useMutation } from 'react-query'

type AddScheduleMutationProps = AddDdayRequestProps & {
  callBack: () => void
}

/**D-Day 추가 */
function useAddDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ targetDate, title }: AddScheduleMutationProps) => addDday({ targetDate, title }), {
    onSuccess: () => {
      console.log('success')
    },
    onError: (err, { callBack }) => {
      console.error(err)
      callBack()
    },
    onSettled: () => {
      queryClient.invalidateQueries(['dDayList'])
    },
  })
  return mutate
}
export default useAddDdayMutation
