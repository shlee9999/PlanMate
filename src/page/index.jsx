import { useState } from "react";
import {
  StyledMain,
  Header,
  Tab,
  AddButton,
  TimerWidgetWrapper,
} from "./styles";
import AddSubjectModal from "../components/Modal/AddSubjectModal/index";
import TimerWidget from "../components/TimerWidget/index";

import { TabList, useFormattedDate } from "../utils/helper";

const tabList = TabList;

function Main() {
  const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
  const formattedDate = useFormattedDate();
  const openAddSubjectModal = () => {
    setIsAddSubjectModalOpen(true);
  };
  const closeAddSubjectModal = () => {
    setIsAddSubjectModalOpen(false);
  };

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <StyledMain>
      <Header>
        <p>{formattedDate}</p>
        <TimerWidgetWrapper>
          <TimerWidget title={`Study`} />
          <TimerWidget title={`Exercise`} />
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
