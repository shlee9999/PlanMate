import TimerTab from "../tabs/Timer";
import StatisticsTab from "../tabs/Statistics";
import PlannerTab from "../tabs/Planner";
import InformationTab from "../tabs/Information";
import { TabInfo } from "src/types";
// import { TabInfo } from "../types";

const Week = ["일", "월", "화", "수", "목", "금", "토"];

const TabList: Array<TabInfo> = [
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
  const minute: number = Math.floor(time / 60) % 60;
  const second: number = Math.floor(time % 60);
  const hour: number = Math.floor(time / 3600) % 24;

  const formattedTime: string =
    hour.toString().padStart(2, "0") +
    ":" +
    minute.toString().padStart(2, "0") +
    ":" +
    second.toString().padStart(2, "0");
  return formattedTime;
};

const useFormattedDate = (): string => {
  const now: Date = new Date();
  const month: string = `${now.getMonth() + 1}`.padStart(2, "0");
  const date: string = `${now.getDate()}`.padStart(2, "0");
  const day: number = now.getDay();
  const formattedDate: string = month + "." + date + "(" + Week[day] + ")";
  return formattedDate;
};

const startTimer = (callback): NodeJS.Timeout => {
  return setInterval(() => {
    callback();
  }, 1000);
};

const stopTimer = (intervalId): void => {
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
