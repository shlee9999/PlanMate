import { FindPlannerResponseProps } from 'api/planner/findPlanner'
import { removePlanner } from 'api/planner/removePlanner'
import { useMutation, useQueryClient } from 'react-query'

function useRemoveAppointMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateRemoveAppoint } = useMutation((plannerId: number) => removePlanner({ plannerId }), {
    onMutate: async (plannerId) => {
      const previousAppointments = queryClient.getQueryData<FindPlannerResponseProps>(['plannerData'])
      queryClient.setQueryData<FindPlannerResponseProps>(['plannerData'], (old) =>
        old.filter((app) => app.plannerId !== plannerId)
      )
      return { previousAppointments }
    },
    onError: (err, plannerId, context) => {
      queryClient.setQueryData(['plannerData'], context.previousAppointments)
    },
    onSuccess: () => {
      console.log('Remove planner successful')
    },
    onSettled: () => {
      queryClient.invalidateQueries(['plannerData'])
    },
  })
  return mutateRemoveAppoint
}

export default useRemoveAppointMutation
