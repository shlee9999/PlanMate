import styled from 'styled-components'
import ellipsisImg from 'assets/images/ellipsis.svg'
import { FlexRow, H16_500, H21_700, P12, P14, PageRoot } from 'commonStyled'
import { motion } from 'framer-motion'
import { InfoBox, NoContentDescription, Pagination } from 'components'
import { DdayContainer } from '../components'

export const EllipsisImg = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  transform: rotate(90deg);
`
export const Root = styled(PageRoot)``
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const MainContainer = styled(FlexRow)`
  height: 60vh;
  width: 100%;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.medium}) {
    justify-content: start;
    flex-direction: column;
    height: 1100px;
    gap: 24px;
  }
`
export const TitleWrapper = styled.div`
  ${P12}
  margin-bottom: 24px;
`
export const UpperTypo = styled.p``
export const Nickname = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.primary.default};
`
export const Title = styled.p`
  ${H21_700}
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 410px;
  flex-basis: 100px;
  flex-grow: 1;
  @media screen and (${(props) => props.theme.medium}) {
    height: fit-content;
    max-width: none;
    width: 100%;
  }
`

export const ProfileContainer = styled(InfoBox)`
  position: relative;
  padding: 24px;
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
  ${H21_700}
`
export const Email = styled.div`
  ${P14}
  margin-top: 4px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.gray1};
`

export const AdminDDay = styled.p`
  ${H16_500}
  margin-bottom: 8px;
`

export const StyledDDayContainer = styled(DdayContainer)`
  flex-grow: 1;
  min-height: 100px;
  @media screen and (${(props) => props.theme.medium}) {
    max-height: 400px;
  }
`

export const RightContainer = styled(InfoBox)`
  min-width: 0; /*flexbox item 부모 요소 너비 초과 방지 */
  flex-basis: 100px;
  flex-grow: 1;
  padding: 0 32px;
  overflow-y: hidden;
  height: calc(100% - 25px);
  @media screen and (${(props) => props.theme.medium}) {
    width: 100%;
    height: 500px;
  }
`

export const TabContentContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  padding-bottom: 60px;
`
export const MyActivity = styled.p`
  ${H16_500}
  color: ${(props) => props.theme.text.black2};
`

export const TabSelector = styled.div`
  min-width: 245px;
  width: 100%;
  position: sticky;
  background-color: ${(props) => props.theme.background.white};
  z-index: 1;
  top: 0;
  height: 62px;
`
export const TabRow = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  &:last-child {
    border-top: 1px solid ${(props) => props.theme.border.default};
    z-index: -1;
  }
`

export const TabItem = styled.div<{ $isSelected: boolean }>`
  text-align: center;
  padding: 0 8px;
  display: inline-block;
  padding-bottom: 10px;
  ${P14}
  ${(props) => props.$isSelected && 'font-weight: 500'};
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? props.theme.primary.default : '')};
  position: relative;
  transition: color 0.2s ease-in-out;
`
export const SelectedLine = styled(motion.hr)`
  position: absolute;
  width: 70px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  background-color: ${(props) => props.theme.primary.default};
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
  ${P14}
  color: ${(props) => props.theme.text.gray2};
`
export const EllipsisEditButton = styled(EllipsisButtonRoot)``
export const EllipsisResignButton = styled(EllipsisButtonRoot)``
export const StyledNoContentDescription = styled(NoContentDescription)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
  right: 0;
  margin: 0 auto;
`
export const StyledPagination = styled(Pagination)`
  padding: 40px 0;
`
