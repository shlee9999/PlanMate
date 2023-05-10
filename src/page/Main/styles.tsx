import styled from 'styled-components';

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  p {
    font-size: 1.5rem;
  }
`;

const TimerWidgetWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
`;

const Tab = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
`;

const AddButton = styled.button`
  margin-top: 5px;
  cursor: pointer;
`;

export { StyledMain, Header, Tab, AddButton, TimerWidgetWrapper };
