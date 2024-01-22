import { AddScheduleRequestProps, addSchedule } from 'api/schedule/addSchedule'
import { useQueryClient, useMutation } from 'react-query'

type AddScheduleMutationProps = AddScheduleRequestProps

/** */
function useAddScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ targetDate, title }: AddScheduleMutationProps) => addSchedule({ targetDate, title }),
    {
      onSuccess: (data, { targetDate, title }) => {
        console.log('success')
      },
      onError: (err, { targetDate, title }, context) => {
        console.error(err)
      },
      onSettled: () => {
        queryClient.invalidateQueries(['dDayList'])
      },
    }
  )
  return mutate
}
export default useAddScheduleMutation
