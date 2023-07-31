import styled from 'styled-components'
import ellipsisImg from 'assets/images/ellipsis.png'

export const EllipsisImg = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  transform: rotate(90deg);
`
export const Root = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 31px 160px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 16px;
`
export const TitleWrapper = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 24px;
`
export const UpperTypo = styled.p``
export const Nickname = styled.span`
  font-weight: 500;
  color: #01cb45;
`
export const Title = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`

export const LeftContainer = styled.div`
  max-width: 410px;
  flex-basis: 100px;
  flex-grow: 1;
`

export const ProfileTypo = styled.p`
  margin-bottom: 8px;
`
export const ProfileContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  border: 1px solid #dddede;
  border-radius: 8px;
  font-weight: 400;
  color: #222222;
  margin-bottom: 24px;
  &:hover {
    ${EllipsisImg} {
      content: url(${ellipsisImg});
      width: 16px;
      height: 16px;
    }
  }
`

export const UserName = styled.span`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`
export const Email = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #666666;
`
export const GoogleLogo = styled.img`
  width: 16px;
  height: 16px;
`
export const EllipsisModal = styled.div``
export const EllipsisModalItem = styled.p``

export const TypoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 2px;
`
export const AdminDDay = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`
export const SeeMore = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #666666;
`
export const RightArrow = styled.img`
  width: 18px;
  height: 18px;
`
export const LeftArrow = styled.img`
  width: 18px;
  height: 18px;
  transform: rotate(180deg);
`
export const DDayContainer = styled.div`
  box-sizing: border-box;
  height: 384px;
  border: 1px solid #dddede;
  border-radius: 8px;
  padding: 24px;
`

export const RightContainer = styled.div`
  flex-basis: 100px;
  margin-top: 67px;
  flex-grow: 1;
`

export const MyActivityContainer = styled.div`
  position: relative;
  border: 1px solid #dddede;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 60.5px 32px;
  height: 536px;
`
export const MyActivity = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #444444;
`
export const ExamInfoItemContainer = styled.div`
  border-top: 1px solid #c6c6c6;
`
export const TabSelector = styled.div`
  position: absolute;
  top: 32.5px;
  left: 35px;
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  column-gap: 16px;
`
export const TabItem = styled.p`
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  &.isSelected {
    font-weight: 500;
    color: #01cb45;
    border-bottom: 1px solid #01cb45;
  }
`

export const ArrowWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`
