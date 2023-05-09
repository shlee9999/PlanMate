import { useState, useRef, useEffect } from "react";
import { StyledTimerWidget } from "./styles";
import { useSelector } from "react-redux";
import { useFormattedTime, startTimer, stopTimer } from "../../utils/helper";
import { Globals } from "src/types";

const width = 300;
const height = 120;
const left = window.screen.width - width;
const top = 0;

function TimerWidget({ title }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isRunning = useSelector((state: Globals) => state.isRunning);
  const [time, setTime] = useState<number>(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const formattedTime: string = useFormattedTime(time);
  const popupWindow = useRef<Window | null>(null);

  const handlePopupButtonClick = () => {
    if (isPopupOpen) return;
    const state = { key1: time.toString() };
    openInNewWindow("/popup", state);
    setIsPopupOpen(true);
  };
  function openInNewWindow(route: string, state: Record<string, string>): void {
    const queryParams = new URLSearchParams(state).toString();
    popupWindow.current = window.open(
      `${route}?${queryParams}`,
      "_blank",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, copyhistory=no, 
      width=${width}, height=${height}, top=${top}, left=${left}`
    );
    popupWindow.current?.focus();
  }
  useEffect(() => {
    const handlePopupClosedMessage = (event: MessageEvent) => {
      if (event.data.popupClosed) {
        popupWindow.current = null;
        setIsPopupOpen(false);
      }
    };
    window.addEventListener("message", handlePopupClosedMessage);
    return () => {
      window.removeEventListener("message", handlePopupClosedMessage);
    };
  }, []);
  useEffect(() => {
    if (!isRunning) {
      stopTimer(intervalId.current);
      return;
    }

    intervalId.current = startTimer(() => {
      setTime((prev) => {
        const newState = prev + 1;
        popupWindow.current?.postMessage(
          { key1: newState },
          window.location.origin
        );
        return newState;
      });
    });
  }, [isRunning]);

  return (
    <StyledTimerWidget>
      <p>{title}</p>
      <p>{formattedTime}</p>
      <button onClick={handlePopupButtonClick}>Popup</button>
    </StyledTimerWidget>
  );
}

export default TimerWidget;
