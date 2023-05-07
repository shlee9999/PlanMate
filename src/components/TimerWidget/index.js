import { useState, useRef, useEffect } from "react";
import "./index.css";
function TimerWidget() {
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
    if (!isRunning) {
      setIsRunning(true);
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
  };

  const handleOnReset = () => {
    if (!isRunning) {
      setTime(0);
    }
  };
  return (
    <div className="timer_widget">
      {isRunning ? (
        <button className="pause_button" onClick={handleOnPause}>
          Pause
        </button>
      ) : (
        <button className="start_button" onClick={handleOnStart}>
          Start
        </button>
      )}

      {/* <button onClick={handleOnReset}>Reset</button> */}

      <p>{`${hour}:${minute}:${second}`}</p>
    </div>
  );
}

export default TimerWidget;
