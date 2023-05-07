import { useState, useRef, useEffect } from "react";
import "./index.css";
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
    <div className="todo_item">
      <div className="left_wrapper">
        {isRunning ? (
          <button className="pause_button" onClick={handleOnPause}>
            Pause
          </button>
        ) : (
          <button className="start_button" onClick={handleOnStart}>
            Start
          </button>
        )}
        <p className="subject_title">{title}</p>
      </div>
      <p className="time">{`${hour}:${minute}:${second}`}</p>
    </div>
  );
}

export default TodoItem;
