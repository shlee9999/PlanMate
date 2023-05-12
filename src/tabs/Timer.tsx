//타이머 탭
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem/index';
import { Globals } from 'src/types.js';

const Timer = () => {
  const store = useSelector((state: Globals) => state.todos);
  return (
    <div>
      <div>
        {store.map(
          (todo) =>
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
          (todo) =>
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
