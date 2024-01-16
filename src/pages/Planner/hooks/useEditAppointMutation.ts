import { editPlanner } from 'api/planner/editPlanner'
import { useMutation, useQueryClient } from 'react-query'
import { IAppointment } from 'types'

function useEditAppointMutation({ colorHex, day, startAt, endAt, scheduleName, plannerId }: IAppointment) {
  const queryClient = useQueryClient()
  const { mutate: mutateEditAppoint } = useMutation(
    (plannerId: number) =>
      editPlanner({
        colorHex,
        day,
        startAt,
        endAt,
        scheduleName,
        plannerId,
      }),
    {
      onMutate: async () => {
        const previousAppointments = queryClient.getQueryData<IAppointment[]>(['plannerData'])
        queryClient.setQueryData<IAppointment[]>(
          ['plannerData'],
          (prev) =>
            prev.map((app) =>
              app.plannerId === plannerId ? { colorHex, day, startAt, endAt, scheduleName, plannerId } : app
            ) // tempId
        )
        return { previousAppointments }
      },
      onSuccess: (data) => {
        console.log('success edit')
      },
      onError: (err, variables, context) => {
        console.log('error:', err)
        queryClient.setQueryData(['plannerData'], context.previousAppointments)
      },
    }
  )
  return mutateEditAppoint
}
export default useEditAppointMutation
