//타이머 탭
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

const Timer = () => {
  const store = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <TodoItem></TodoItem>
    </div>
  );
};
export default Timer;
