import { useState } from "react";
import "./Main.css";
import TimerTab from "../tabs/Timer";
import StatisticsTab from "../tabs/Statistics";
import PlannerTab from "../tabs/Planner";
import InformationTab from "../tabs/Information";
function Main() {
  const now = new Date();
  const month =
    now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
  const date = now.getDate() >= 10 ? now.getDate() : "0" + now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const day = now.getDay();
  const tabList = ["타이머", "통계", "플래너", "수험정보"];
  const [currentTab, setCurrentTab] = useState(0);
  const tabComponents = [
    <TimerTab />,
    <StatisticsTab />,
    <PlannerTab />,
    <InformationTab />,
  ];
  return (
    <div className="Main">
      <div className="header">
        <p>{`${month}.${date}.(${week[day]})`}</p>
        <div className="timer_wrapper">
          <div>타이머1</div>
          <div>타이머2</div>
        </div>
      </div>
      <div className="tab">
        {tabList.map((el, index) => (
          <div
            className="tab_items"
            onClick={() => {
              setCurrentTab(index);
            }}
          >
            {el}
          </div>
        ))}
      </div>
      {tabComponents[currentTab]}
    </div>
  );
}

export default Main;
