import { FindAllSubjectResponseProps, findAllSubject } from 'api/subject/findAllSubject'
import { useQuery } from 'react-query'
import { QueryKeys, TodoItemType } from 'types'
import { timeUtils } from 'utils'

export const useTodoList = () => {
  const { data, isLoading: isTodoLoading } = useQuery<FindAllSubjectResponseProps>(
    [QueryKeys.todoList],
    () => findAllSubject(),
    {
      staleTime: Infinity,
    }
  )
  const todoList: TodoItemType[] =
    data?.map((todo) => ({
      colorHex: todo.colorHex,
      name: todo.name,
      subjectId: todo.subjectId,
      time: timeUtils.timeToSecond({
        hour: todo.studyTimeHours,
        minute: todo.studyTimeMinutes,
        second: todo.studyTimeSeconds,
      }),
    })) || []
  return { isTodoLoading, todoList }
}
