import { useEffect, useState } from "react";
import { useFormattedTime } from "src/utils/helper";

function Popup() {
  const [time, setTime] = useState<number>(0);
  const formattedTime = useFormattedTime(time);

  useEffect(() => {
    // Get the initial state from the URLSearchParams
    const queryParams = new URLSearchParams(window.location.search);
    const initialTime = Number(queryParams.get("key1"));
    setTime(initialTime);

    // Set up the event listener for receiving updated state
    const handleMessage = (event: MessageEvent) => {
      if (event.data.key1) {
        setTime(event.data.key1);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        window.close();
      }
    };
    window.addEventListener("message", handleMessage); //이 이벤트 리스너는 window.postMessage() 메서드를 사용하여 창에 메시지를 보낼 때마다 handleMessage 함수를 트리거합니다.message 이벤트는 동일한 도메인에 있는 서로 다른 창 또는 iframe 간에 또는 창과 작업자 간에 통신하는 데 사용할 수 있습니다. 한 창에서 다른 창으로 데이터(JSON 개체 형식)를 전달할 수 있으므로 안전한 방식으로 창 간 통신이 가능합니다.
    window.addEventListener("keydown", handleKeyDown);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Popup</h1>
      <p>Time: {formattedTime}</p>
    </div>
  );
}

export default Popup;
