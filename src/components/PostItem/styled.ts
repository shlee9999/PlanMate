import { P10, P16 } from 'commonStyled'
import { EXAMINFOITEM_MIN_WIDTH } from 'constants/layout'
import styled from 'styled-components'

export const PostItem = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 16px 0 10px 8px;
  min-width: ${EXAMINFOITEM_MIN_WIDTH}px;
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.border.dark};
`
export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
export const TitleTypo = styled.div`
  ${P16}
  color: ${(props) => props.theme.text.black1};
  cursor: pointer;
`
export const InfoTypo = styled.div`
  ${P10}
  color: ${(props) => props.theme.text.gray2};
`

export const NickName = styled.div``
export const UpdatedDate = styled.div``
export const IconContainer = styled.div`
  position: absolute;
  right: 8px;
  bottom: 10px;
  display: flex;
  column-gap: 5px;
  ${P10}
`
export const IconCountWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
`
