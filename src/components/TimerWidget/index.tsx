import { useState, useRef, useEffect } from "react";
import { StyledTimerWidget } from "./styles";
import { useSelector } from "react-redux";
import { useFormattedTime, startTimer, stopTimer } from "../../utils/helper";
import { Globals } from "src/types";

function TimerWidget({ title }) {
  const isRunning = useSelector((state: Globals) => state.isRunning);
  const [time, setTime] = useState<number>(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const formattedTime: string = useFormattedTime(time);

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
