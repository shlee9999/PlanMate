import { useState, useRef, useEffect } from "react";
import { StyledTimerWidget } from "./styles";
import { useSelector } from "react-redux";
import { useFormattedTime } from "../../utils/helper";
function TimerWidget({ title }) {
  const isRunning = useSelector((state) => state.isRunning);
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);
  const formattedTime = useFormattedTime(time);

  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalId.current);
      return;
    }
    intervalId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, [isRunning]);

  return (
    <StyledTimerWidget>
      <p>{title}</p>
      <p>{formattedTime}</p>
    </StyledTimerWidget>
  );
}

export default TimerWidget;
