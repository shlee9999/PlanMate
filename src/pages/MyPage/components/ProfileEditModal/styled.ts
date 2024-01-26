import { H14_500, H16_500 } from 'commonStyled'
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
  background-color: ${(props) => props.theme.background.white};
  box-shadow: 0px 4px 10px 0px #00000024;
  overflow: hidden;
`
export const Title = styled.div`
  margin-top: 40px;
  ${H16_500}
  color: ${(props) => props.theme.text.black2};
`
export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const NicknameTypo = styled.p`
  margin-right: 16px;
  ${H14_500}
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
`
export const NicknameInput = styled.input`
  box-sizing: border-box;
  padding: 0 8px;
  width: 208px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.primary.default};
`
