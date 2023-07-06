import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`
export const BulletinButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PaginationWrapper = styled.div`
  position: relative;
  width: 295px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ArrowImg = styled.img`
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 10px;
`
export const LeftArrowImg = styled(ArrowImg)`
  left: 9px;
`
export const RightArrowImg = styled(ArrowImg)`
  right: 9px;
`
export const PageNumberWrapper = styled.div`
  width: 247px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PageNumberTypo = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
  width: 200px;
  color: #666666;
`
export const CurrentPageNumberTypo = styled(PageNumberTypo)`
  font-weight: 500;
  color: #444444;
`
