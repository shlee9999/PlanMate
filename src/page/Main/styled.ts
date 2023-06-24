import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  font-size: 1.5rem;
`

export const TimerWidgetWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
`

export const Tab = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
`

export const AddButton = styled.button`
  margin-top: 5px;
  cursor: pointer;
`
