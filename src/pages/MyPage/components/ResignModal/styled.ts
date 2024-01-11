import styled from 'styled-components'
import resignImg from 'assets/images/resign.svg'
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
  background-image: url(${resignImg});
  background-position: 50% 43%;
  background-size: 144px 144px;
  background-repeat: no-repeat;
`

export const Title = styled.p`
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => props.theme.text.black2};
`
export const DescriptionTypo = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.theme.warning};
`
