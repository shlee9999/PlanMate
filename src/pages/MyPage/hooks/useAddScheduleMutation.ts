import { AddScheduleRequestProps, addSchedule } from 'api/schedule/addSchedule'
import { useQueryClient, useMutation } from 'react-query'

type AddScheduleMutationProps = AddScheduleRequestProps & {
  callBack: () => void
}

/** */
function useAddScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ targetDate, title }: AddScheduleMutationProps) => addSchedule({ targetDate, title }),
    {
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
    }
  )
  return mutate
}
export default useAddScheduleMutation
