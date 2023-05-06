import { useState } from "react";
import "./Main.css";
import TimerTab from "../tabs/Timer";
import StatisticsTab from "../tabs/Statistics";
import PlannerTab from "../tabs/Planner";
import InformationTab from "../tabs/Information";
import { useSelector, useDispatch } from "react-redux";
function Main() {
  const now = new Date();
  const month =
    now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
  const date = now.getDate() >= 10 ? now.getDate() : "0" + now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const day = now.getDay();
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const tabList = [
    { title: "타이머", component: <TimerTab />, wrapper: "timer_tab_wrapper" },
    {
      title: "통계",
      component: <StatisticsTab />,
      wrapper: "statistics_tab_wrapper",
    },
    {
      title: "플래너",
      component: <PlannerTab />,
      wrapper: "planner_tab_wrapper",
    },
    {
      title: "수험정보",
      component: <InformationTab />,
      wrapper: "information_tab_wrapper",
    },
  ];
  const [currentTab, setCurrentTab] = useState(0);

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
        {tabList.map((item, index) => (
          <div
            className="tab_items"
            onClick={() => {
              setCurrentTab(index);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={tabList[currentTab].wrapper}>
        {tabList[currentTab].component}
      </div>
      {currentTab === 0 && (
        <button
          onClick={() => {
            dispatch({
              type: "ADD",
              value: tabList[currentTab].title,
            });
            console.log(store);
          }}
        >
          추가
        </button>
      )}
    </div>
  );
}

export default Main;
