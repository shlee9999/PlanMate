import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 16px 0 10px 8px;
  width: 1088px;
  height: 80px;
  border-bottom: 1px solid #c6c6c6;
`
export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
export const TitleTypo = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #222222;
`
export const InfoTypo = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 12.5px;
  color: #888888;
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
`
export const Icon = styled.img`
  width: 12px;
  height: 12px;
`
