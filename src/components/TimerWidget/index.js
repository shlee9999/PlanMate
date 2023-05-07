import { useState, useRef, useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";
function TimerWidget({ title }) {
  const isRunning = useSelector((state) => state.isRunning);
  const [time, setTime] = useState(0);
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

  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalId.current);
      return;
    }
    intervalId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, [isRunning]);

  // const handleOnPause = () => {
  //   setIsRunning(false);
  // };

  const handleOnReset = () => {
    if (!isRunning) {
      setTime(0);
    }
  };
  return (
    <div className="timer_widget">
      <p>{`${hour}:${minute}:${second}`}</p>
    </div>
  );
}

export default TimerWidget;
