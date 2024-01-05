import { TagRoot } from 'styled'
import styled from 'styled-components'
import whiteBulletinIcon from 'assets/images/bulletin_white.png'
import greenBulletinIcon from 'assets/images/bulletin_green.png'
import { EXAMINFOITEM_MAX_WIDTH, EXAMINFOITEM_MIN_WIDTH } from 'constants/layout'
export const Root = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 45px 160px 40px;
`
const DescriptionTypo = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #444444;
`

export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleTypo = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  color: #444444;
`

export const UpperDescriptionTypo = styled(DescriptionTypo)``
export const LowerDescriptionTypo = styled(DescriptionTypo)`
  margin-top: 24px;
`
export const Tag = styled(TagRoot)``
export const TagButton = styled.button`
  flex-basis: 100px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid #dddede;
  color: #666666;

  &.isSelected {
    border: 1px solid #01cb45;
    color: #01cb45;
    background-color: #e2f9ea;
  }
`

const TagButtonWrapper = styled.div`
  min-width: 230px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`
export const UpperTagButtonWrapper = styled(TagButtonWrapper)`
  margin: 12px 0;
`
export const LowerTagButtonWrapper = styled(TagButtonWrapper)`
  margin-bottom: 32px;
`
export const BulletinIcon = styled.img`
  width: 13.3px;
  height: 13.3px;
  content: url(${greenBulletinIcon});
`
export const BulletinButton = styled.button`
  align-self: flex-end;
  margin: 24px 0;
  bottom: -50px;
  width: 96px;
  height: 32px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #01cb45;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  &:hover {
    color: white;
    background-color: #1db951;
    ${BulletinIcon} {
      content: url(${whiteBulletinIcon});
    }
    border: none;
  }
`

export const GreenBulletinIcon = styled(BulletinIcon)``
export const WhiteBulletinIcon = styled(BulletinIcon)``

export const ExamInfoWrapper = styled.div`
  min-width: ${EXAMINFOITEM_MIN_WIDTH}px;
  position: relative;
  border-top: 2px solid #666666;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoContentWrapper = styled.div`
  margin-top: 84px;
  margin-bottom: 100px;
`

export const PaginationWrapper = styled.div`
  position: relative;
  width: 100%;
`