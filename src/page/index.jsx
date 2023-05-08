import { useState } from "react";
import {
  StyledMain,
  Header,
  Tab,
  AddButton,
  TimerWidgetWrapper,
} from "./styles";
import TimerTab from "../tabs/Timer";
import StatisticsTab from "../tabs/Statistics";
import PlannerTab from "../tabs/Planner";
import InformationTab from "../tabs/Information";
import AddSubjectModal from "../components/Modal/AddSubjectModal/index";
import TimerWidget from "../components/TimerWidget/index";
const week = ["일", "월", "화", "수", "목", "금", "토"];
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
function Main() {
  const [isStudying, setIsStudying] = useState(false);
  const [isExercising, setIsExercising] = useState(false);
  const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
  const now = new Date();
  const month =
    now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
  const date = now.getDate() >= 10 ? now.getDate() : "0" + now.getDate();
  const day = now.getDay();
  const openAddSubjectModal = () => {
    setIsAddSubjectModalOpen(true);
  };
  const closeAddSubjectModal = () => {
    setIsAddSubjectModalOpen(false);
  };

  const [currentTab, setCurrentTab] = useState(0);
  const startStudying = () => {
    setIsStudying(true);
  };
  const stopStudying = () => {
    setIsStudying(false);
  };
  const startExercising = () => {
    setIsExercising(true);
  };
  const stopExercising = () => {
    setIsExercising(false);
  };
  return (
    <StyledMain>
      <Header>
        <p>{`${month}.${date}.(${week[day]})`}</p>
        <TimerWidgetWrapper>
          <TimerWidget
            title={`Study`}
            isRunning={isStudying}
            // setIsRunning={setIsStudying}
          />
          <TimerWidget
            title={`Exercise`}
            isRunning={isExercising}
            // setIsRunning={setIsExercising}
          />
        </TimerWidgetWrapper>
      </Header>

      <Tab>
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
      </Tab>

      <div className={tabList[currentTab].wrapper}>
        {tabList[currentTab].component}
      </div>
      {currentTab === 0 && (
        <AddButton onClick={openAddSubjectModal}>추가</AddButton>
      )}
      <AddSubjectModal
        isModalOpen={isAddSubjectModalOpen}
        closeModal={closeAddSubjectModal}
      ></AddSubjectModal>
    </StyledMain>
  );
}

export default Main;
