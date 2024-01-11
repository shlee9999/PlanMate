import styled from 'styled-components'
import ellipsisImg from 'assets/images/ellipsis.svg'
import { PageRoot } from 'commonStyled'
import { RightArrow } from 'assets/SvgComponents'
import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'constants/layout'

export const EllipsisImg = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  transform: rotate(90deg);
`
export const Root = styled(PageRoot)`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`
export const Container = styled.div`
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
  color: ${(props) => props.theme.primary.default};
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
  border: 1px solid ${(props) => props.theme.border.default};
  border-radius: 8px;
  font-weight: 400;
  color: ${(props) => props.theme.text.black1};
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
  color: ${(props) => props.theme.text.gray1};
`

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
  color: ${(props) => props.theme.text.gray1};
`
export const NextArrow = styled(RightArrow)``
export const PrevArrow = styled(RightArrow)`
  transform: rotate(180deg);
`
export const DDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  box-sizing: border-box;
  height: 384px;
  border: 1px solid ${(props) => props.theme.border.default};
  border-radius: 8px;
  padding: 24px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const RightContainer = styled.div`
  flex-basis: 100px;
  margin-top: 67px;
  flex-grow: 1;
`

export const MyActivityContainer = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.border.default};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0 32px;
  height: 536px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const MyActivity = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => props.theme.text.black2};
`
export const CurrentContentContainer = styled.div``
export const TabSelector = styled.div`
  width: 100%;
  position: sticky;
  display: table;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.background.white};
  z-index: 1;
  top: 0;
  height: 62px;
  box-sizing: border-box;
`
export const TabRow = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  &:last-child {
    border-top: 1px solid ${(props) => props.theme.border.default};
    z-index: -1;
  }
  display: table-row;
`
export const TabItem = styled.div`
  text-align: center;
  padding: 0 8px;
  display: table-cell;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  &.isSelected {
    font-weight: 500;
    color: ${(props) => props.theme.primary.default};
    border-bottom: 1px solid ${(props) => props.theme.primary.default};
  }
`

export const ArrowWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`

export const EllipsisModal = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
  transform: translate(0, 16px);
  width: 160px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.border.default};
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.white};
  z-index: 1;
  box-sizing: border-box;
  padding: 6px 5px;
`
const EllipsisButtonRoot = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.primary.light};
    color: ${(props) => props.theme.primary.default};
  }
  text-align: left;
  box-sizing: border-box;
  padding-left: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${(props) => props.theme.text.gray2};
`
export const EllipsisEditButton = styled(EllipsisButtonRoot)``
export const EllipsisResignButton = styled(EllipsisButtonRoot)``
