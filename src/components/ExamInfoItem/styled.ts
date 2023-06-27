import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 16px 0 10px 8px;
  width: 1088px;
  height: 80px;
  border: 1px black solid;
`
export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
export const TitleTypo = styled.div`
  /* font-family: 'Courier New', Courier, monospace; */
  /* font-weight: 500; */
  font-size: 16px;
`
export const InfoTypo = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 12.5px;
`

export const NickName = styled.div``
export const UpdatedDate = styled.div``
export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  column-gap: 8px;
`
export const ImgInfoWrapper = styled.div`
  display: flex;
`
export const Icon = styled.img`
  width: 12px;
  height: 12px;
`
export const IconCount = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 12.5px;
`
