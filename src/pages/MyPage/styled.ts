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
  box-sizing: border-box;
  padding: 31px 160px;
  display: flex;
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

export const LeftContainer = styled.div``

export const ProfileTypo = styled.p`
  margin-bottom: 8px;
`
export const ProfileContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  border: 1px solid #dddede;
  border-radius: 8px;
  max-width: 402px;
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
  margin-left: 266px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #666666;
`
export const RightArrow = styled.img`
  width: 18px;
  height: 18px;
`
export const DDayContainer = styled.div`
  box-sizing: border-box;
  max-width: 402px;
  height: 384px;
  border: 1px solid #dddede;
  border-radius: 8px;
  padding: 24px;
`

export const RightContainer = styled.span``
