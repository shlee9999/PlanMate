import { EditDdayRequestProps, editDday } from 'api/dday/editDday'
import { QueryKeys } from 'types'
import { useQueryClient, useMutation } from 'react-query'
import { FindAllDdayResponseProps } from 'api/dday/findAllDday'

type UseEditScheduleMutationProps = EditDdayRequestProps & {
  //* input 초기화 콜백
  callBack: () => void
}

/**D-Day 수정 */
function useEditDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ targetDate, title, dDayId }: UseEditScheduleMutationProps) => editDday({ targetDate, title, dDayId }),
    {
      onMutate: ({ targetDate, title, dDayId, callBack }) => {
        const prevData = queryClient.getQueryData([QueryKeys.dDayList])
        queryClient.setQueryData<FindAllDdayResponseProps>([QueryKeys.dDayList], (prev) =>
          prev.map((prevDday) => (prevDday.dDayId === dDayId ? { ...prevDday, targetDate, title } : prevDday))
        )
        callBack()
        return { prevData }
      },
      onSuccess: () => {
        console.log('success')
      },
      onError: (err, vars, context) => {
        queryClient.setQueryData([QueryKeys.dDayList], context.prevData)
        console.error(err)
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKeys.dDayList])
      },
    }
  )
  return mutate
}
export default useEditDdayMutation
