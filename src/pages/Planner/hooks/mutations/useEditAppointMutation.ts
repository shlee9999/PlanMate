import { EditPlannerRequestProps, editPlanner } from 'api/planner/editPlanner'
import { useMutation, useQueryClient } from 'react-query'

/**플래너 일정 수정 */
type EditAppointMutationProps = EditPlannerRequestProps
function useEditAppointMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateEditAppoint } = useMutation(
    ({ colorHex, day, startAt, endAt, scheduleName, plannerId }: EditAppointMutationProps) =>
      editPlanner({
        colorHex,
        day,
        startAt,
        endAt,
        scheduleName,
        plannerId,
      }),
    {
      onMutate: ({ colorHex, day, startAt, endAt, scheduleName, plannerId }: EditAppointMutationProps) => {
        const previousAppointments = queryClient.getQueryData<EditAppointMutationProps[]>(['plannerData'])
        queryClient.setQueryData<EditAppointMutationProps[]>(
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
