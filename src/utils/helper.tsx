import TimerTab from "../tabs/Timer";
import StatisticsTab from "../tabs/Statistics";
import PlannerTab from "../tabs/Planner";
import InformationTab from "../tabs/Information";
// import { TabInfo } from "../types";

const Week = ["일", "월", "화", "수", "목", "금", "토"];

const TabList = [
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

const useFormattedTime = (time) => {
  const minute = Math.floor(time / 60) % 60;
  const second = Math.floor(time % 60);
  const hour = Math.floor(time / 3600) % 24;

  const formattedTime =
    hour.toString().padStart(2, "0") +
    ":" +
    minute.toString().padStart(2, "0") +
    ":" +
    second.toString().padStart(2, "0");
  return formattedTime;
};

const useFormattedDate = () => {
  const now = new Date();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const date = `${now.getDate()}`.padStart(2, "0");
  const day = now.getDay();
  const formattedDate = month + "." + date + "(" + Week[day] + ")";
  return formattedDate;
};

const startTimer = (callback) => {
  return setInterval(() => {
    callback();
  }, 1000);
};

const stopTimer = (intervalId) => {
  clearInterval(intervalId);
};

export {
  useFormattedTime,
  useFormattedDate,
  TabList,
  Week,
  startTimer,
  stopTimer,
};
