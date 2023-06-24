import styled from 'styled-components'
export const Root = styled.div`
  padding: 15px 20px;
  width: 200px;
  height: 150px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
`
export const UpdateSubjectButton = styled.button`
  width: 200px;
  height: 25px;
`
export const DeleteSubjectButton = styled.button`
  width: 200px;
  height: 25px;
`

export const EllipsisModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
