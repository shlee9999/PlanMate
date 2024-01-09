import { EXAMINFOITEM_MAX_WIDTH, EXAMINFOITEM_MIN_WIDTH } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
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
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.text.black1};
  cursor: pointer;
`
export const InfoTypo = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 12.5px;
  color: ${(props) => props.theme.text.gray2};
`

export const NickName = styled.div``
export const UpdatedDate = styled.div``
export const IconContainer = styled.div`
  position: absolute;
  right: 8px;
  bottom: 10px;
  display: flex;
  column-gap: 8px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12.5px;
`
export const IconCountWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
`
export const Icon = styled.img`
  width: 12px;
  height: 12px;
`
