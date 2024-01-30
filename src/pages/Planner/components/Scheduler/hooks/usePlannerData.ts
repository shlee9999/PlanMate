import { FindPlannerResponseProps, findPlanner } from 'api/planner/findPlanner'
import { useQuery } from 'react-query'
import { QueryKeys } from 'types'

export const usePlannerData = () => {
  const { data: plannerData, isLoading: isPlannerLoading } = useQuery<FindPlannerResponseProps>(
    [QueryKeys.plannerData],
    () => findPlanner(),
    {
      initialData: [],
      keepPreviousData: true,
    }
  )

  return { plannerData, isPlannerLoading }
}
