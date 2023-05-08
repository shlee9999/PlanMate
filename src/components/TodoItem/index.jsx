import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormattedTime, startTimer, stopTimer } from "../../utils/helper";
import {
  StyledTodoItem,
  LeftWrapper,
  StartButton,
  PauseButton,
  SubjectTitle,
  Time,
} from "./styles";

function TodoItem({ title }) {
  const store = useSelector((state) => state.isRunning);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const formattedTime = useFormattedTime(time);
  const intervalId = useRef(null);
  const dispatch = useDispatch();

  const startTotalTimer = () => {
    dispatch({ type: "RUN_STUDY" });
  };

  const stopTotalTimer = () => {
    dispatch({ type: "STOP_STUDY" });
  };

  const handleOnStart = () => {
    if (!store) {
      setIsRunning(true);
      startTotalTimer();
    }
  };

  useEffect(() => {
    if (!isRunning) {
      stopTimer(intervalId.current);
      return;
    }
    intervalId.current = startTimer(() => {
      setTime((prev) => prev + 1);
    });
  }, [isRunning]);

  const handleOnPause = () => {
    setIsRunning(false);
    stopTotalTimer();
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
      <Time>{formattedTime}</Time>
    </StyledTodoItem>
  );
}

export default TodoItem;
