import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 240px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 10px 0px #00000024;
  overflow: hidden;
`
export const Title = styled.div`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #444444;
`
export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const NicknameTypo = styled.p`
  margin-right: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #666666;
`
export const NicknameInput = styled.input`
  box-sizing: border-box;
  padding: 0 8px;
  width: 208px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #01cb45;
`
