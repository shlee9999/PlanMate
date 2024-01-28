import { EditDdayRequestProps, editDday } from 'api/dday/editDday'
import { QueryKeyType } from 'enums'
import { useQueryClient, useMutation } from 'react-query'

type UseEditScheduleMutationProps = EditDdayRequestProps & {
  callBack: () => void
}

/**D-Day 수정 */
function useEditDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ targetDate, title, dDayId }: UseEditScheduleMutationProps) => editDday({ targetDate, title, dDayId }),
    {
      onSuccess: (data, { callBack }) => {
        callBack()
        console.log('success')
      },
      onError: (err) => {
        console.error(err)
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKeyType.dDayList])
      },
    }
  )
  return mutate
}
export default useEditDdayMutation
