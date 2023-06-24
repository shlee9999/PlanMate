//타이머 탭
import { useSelector } from 'react-redux';
import TodoItem from 'components/TodoItem/index';
import { Globals, TodoItems } from 'types';

const Timer = () => {
  const store = useSelector((state: Globals) => state.todos);
  return (
    <div>
      <div>
        {store.map(
          (todo: TodoItems) =>
            todo.category === 'study' && (
              <TodoItem
                title={todo.title}
                key={todo.id}
                todo={todo}
                buttonColor={todo.color}
              />
            )
        )}
      </div>
      <div>
        {store.map(
          (todo: TodoItems) =>
            todo.category === 'exercise' && (
              <TodoItem
                title={todo.title}
                key={todo.id}
                todo={todo}
                buttonColor={todo.color}
              />
            )
        )}
      </div>
    </div>
  );
};
export default Timer;
