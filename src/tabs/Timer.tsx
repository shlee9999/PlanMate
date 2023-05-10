//타이머 탭
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem/index';
import { Globals } from 'src/types.js';

const Timer = () => {
  const store = useSelector((state: Globals) => state.todos);

  return (
    <div>
      {store.map((el) => (
        <TodoItem title={el.title} key={el.id} todo_id={el.id} />
      ))}
    </div>
  );
};
export default Timer;
