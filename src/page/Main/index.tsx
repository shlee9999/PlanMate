import { useState } from 'react';
import { StyledMain, Header, Tab, AddButton, TimerWidgetWrapper } from './styles';
import SubjectModal from '../../components/Modals/Modal/index';
import TimerWidget from '../../components/TimerWidget/index';
import { TabList, useFormattedDate } from '../../utils/helper';
import { TabInfo } from 'src/types';

const tabList: Array<TabInfo> = TabList;

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const formattedDate: string = useFormattedDate();
  const openSubjectModal = (): void => {
    setModalTitle('과목 추가');
    setIsModalOpen(true);
  };
  const openExerciseModal = (): void => {
    setModalTitle('종목 추가');
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const [currentTab, setCurrentTab] = useState<number>(0);

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
            key={index}
            onClick={() => {
              setCurrentTab(index);
            }}
          >
            {item.title}
          </div>
        ))}
      </Tab>

      <div className={tabList[currentTab].wrapper}>{tabList[currentTab].component}</div>
      {currentTab === 0 && <AddButton onClick={openSubjectModal}>과목 추가</AddButton>}
      {currentTab === 0 && <AddButton onClick={openExerciseModal}>종목 추가</AddButton>}
      <SubjectModal todo={null} title={modalTitle} isModalOpen={isModalOpen} closeModal={closeModal}></SubjectModal>
    </StyledMain>
  );
};

export default Main;
