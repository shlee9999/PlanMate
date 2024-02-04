import { FC } from 'react'
import * as s from './styled'
import { useTodoList } from 'pages/Timer/hooks'
import { NoContentDescription, Spinner } from 'components'
import { TodoItemType } from 'types'
import { TimerItem } from '..'

type TodoContainerProps = {
  className?: string
}

export const TodoContainer: FC<TodoContainerProps> = () => {
  const { todoList, isTodoLoading } = useTodoList()
  return (
    <s.TodoContainer className={todoList.length === 0 ? 'no_content' : ''}>
      {todoList.length !== 0 ? (
        todoList.map((todo: TodoItemType) => {
          return <TimerItem key={todo.subjectId} todo={todo} />
        })
      ) : isTodoLoading ? (
        <Spinner>Loading..</Spinner>
      ) : (
        <NoContentDescription
          descriptions={['아직 공부할 과목이 없어요!', '일정을 설정해 과목을 추가해볼까요?']}
          icon="book_check"
        />
      )}
    </s.TodoContainer>
  )
}
