import { StudyTimeResponseProps, studyTime } from 'api/subject/studyTime'
import { QueryKeyType } from 'enums'
import { useQuery } from 'react-query'
import { TodoItemType } from 'types'
import { timeUtils } from 'utils'

export const useTodoList = () => {
  const { data, isLoading: isTodoLoading } = useQuery<StudyTimeResponseProps>([QueryKeyType.todoList], () =>
    studyTime()
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
