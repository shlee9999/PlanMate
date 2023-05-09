//타이머 탭
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem/index";
import { Globals } from "src/types.js";

const Timer = () => {
  const store = useSelector((state: Globals) => state.todos);

  return (
    <div>
      {store.map(
        (
          el,
          index //키값 백엔드로부터 받아와야 합니다! index로 쓰면 나중에 지우면 오류나요
        ) => (
          <TodoItem title={el.title} key={index} />
        )
      )}
    </div>
  );
};
export default Timer;
