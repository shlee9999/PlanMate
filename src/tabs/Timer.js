//타이머 탭
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

const Timer = () => {
  const store = useSelector((state) => state);

  return (
    <div>
      {store.map((el, index) => (
        <TodoItem title={el.title} key={index} />
      ))}
    </div>
  );
};
export default Timer;
