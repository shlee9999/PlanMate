import { StudyTimeResponseProps, studyTime } from 'api/subject/studyTime'
import { useQuery } from 'react-query'
import { QueryKeys, TodoItemType } from 'types'
import { timeUtils } from 'utils'

export const useTodoList = () => {
  const { data, isLoading: isTodoLoading } = useQuery<StudyTimeResponseProps>([QueryKeys.todoList], () => studyTime(), {
    staleTime: Infinity,
    notifyOnChangeProps: 'tracked',
  })
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
