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
function TodoItem({ title }) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.isRunning);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);
  const minute =
    Math.floor(time / 60) % 60 < 10
      ? "0" + (Math.floor(time / 60) % 60)
      : Math.floor(time / 60) % 60;
  const second =
    Math.floor(time % 60) < 10
      ? "0" + Math.floor(time % 60)
      : Math.floor(time % 60);
  const hour =
    Math.floor(time / 3600) % 60 < 10
      ? "0" + ((Math.floor(time / 3600) % 60) % 24)
      : (Math.floor(time / 3600) % 60) % 24;
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

  // const handleOnReset = () => {
  //   if (!isRunning) {
  //     setTime(0);
  //   }
  // };
  return (
    <StyledTodoItem>
      <LeftWrapper>
        {isRunning ? (
          <PauseButton className="pause_button" onClick={handleOnPause}>
            Pause
          </PauseButton>
        ) : (
          <StartButton className="start_button" onClick={handleOnStart}>
            Start
          </StartButton>
        )}
        <SubjectTitle>{title}</SubjectTitle>
      </LeftWrapper>
      <Time className="time">{`${hour}:${minute}:${second}`}</Time>
    </StyledTodoItem>
  );
}

export default TodoItem;
