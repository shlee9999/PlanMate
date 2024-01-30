import { H16_500, H21_700, P14 } from 'commonStyled'
import styled from 'styled-components'

export const DeletePostModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 240px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background.white};
  box-shadow: 0px 4px 10px 0px #00000024;
  overflow: hidden;
`

export const UpperTypo = styled.p`
  position: absolute;
  top: 36px;
  ${H16_500}
  color: ${(props) => props.theme.text.black2};
`
export const CenterTypoWrapper = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CenterTypo = styled.p`
  ${H21_700}
`
export const DescriptionTypo = styled.p`
  ${P14}
  color: ${(props) => props.theme.text.gray1};
  margin-top: 4px;
`
