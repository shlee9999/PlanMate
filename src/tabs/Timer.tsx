//타이머 탭
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem/index';
import { Globals } from 'src/types.js';

const Timer = () => {
  const store = useSelector((state: Globals) => state.todos);

  return (
    <div>
      {store.map((todo) => (
        <TodoItem title={todo.title} key={todo.id} todo={todo} buttonColor={todo.color} />
      ))}
    </div>
  );
};
export default Timer;
