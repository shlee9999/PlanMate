import { AddScheduleRequestProps, addSchedule } from 'api/schedule/addSchedule'
import { useQueryClient, useMutation } from 'react-query'

type AddScheduleMutationProps = AddScheduleRequestProps

/** */
function addScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ targetDate, title }: AddScheduleMutationProps) => addSchedule({ targetDate, title }),
    {
      onMutate: ({ targetDate, title }) => {
        //
      },
      onSuccess: (data, { targetDate, title }) => {
        console.log('success')
      },
      onError: (err, { targetDate, title }, context) => {
        console.error(err)
      },
    }
  )
  return mutate
}
export default addScheduleMutation
