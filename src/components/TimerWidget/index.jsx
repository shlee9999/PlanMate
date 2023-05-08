import { useState, useRef, useEffect } from "react";
import { StyledTimerWidget } from "./styles";
import { useSelector } from "react-redux";
import { useFormattedTime, startTimer, stopTimer } from "../../utils/helper";

function TimerWidget({ title }) {
  const isRunning = useSelector((state) => state.isRunning);
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);
  const formattedTime = useFormattedTime(time);

  useEffect(() => {
    if (!isRunning) {
      stopTimer(intervalId.current);
      return;
    }
    intervalId.current = startTimer(() => {
      setTime((prev) => prev + 1);
    });
  }, [isRunning]);

  return (
    <StyledTimerWidget>
      <p>{title}</p>
      <p>{formattedTime}</p>
    </StyledTimerWidget>
  );
}

export default TimerWidget;
