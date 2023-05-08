import { useState, useRef, useEffect } from "react";
import {
  StyledTodoItem,
  LeftWrapper,
  StartButton,
  PauseButton,
  SubjectTitle,
  Time,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useFormattedTime } from "../../utils/helper";
function TodoItem({ title }) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.isRunning);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);
  const formattedTime = useFormattedTime(time);

  const handleOnStart = () => {
    if (!store) {
      setIsRunning(true);
      dispatch({ type: "RUN_STUDY" });
    }
  };
  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalId.current);
      return;
    }
    intervalId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, [isRunning]);

  const handleOnPause = () => {
    setIsRunning(false);
    dispatch({ type: "STOP_STUDY" });
  };

  return (
    <StyledTodoItem>
      <LeftWrapper>
        {isRunning ? (
          <PauseButton onClick={handleOnPause}>Pause</PauseButton>
        ) : (
          <StartButton onClick={handleOnStart}>Start</StartButton>
        )}
        <SubjectTitle>{title}</SubjectTitle>
      </LeftWrapper>
      <Time className="time">{formattedTime}</Time>
    </StyledTodoItem>
  );
}

export default TodoItem;
