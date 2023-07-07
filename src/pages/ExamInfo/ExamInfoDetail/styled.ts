import { TagRoot } from 'styled'
import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 184px;
`

export const TagWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  margin-bottom: 3px;
  margin-left: 10px;
`
export const Tag = styled(TagRoot)`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #888888;
`
export const TitleTypoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  height: 26px;
  column-gap: 6px;
  margin-bottom: 16px;
  margin-left: 10px;
`
export const TitleTypo = styled.p`
  font-size: 21px;
  font-weight: 700;
`
export const UpdatedDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #888888;
  margin-bottom: 2px; //없으면 줄이 안맞음
`
export const Nickname = styled.div``

export const ContentWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  position: relative;
  box-sizing: border-box;
  padding: 32px 8px;
  width: 1088px;
  font-size: 14px;
  font-weight: 400;
  border-top: 2px solid #444444;
  border-bottom: 1px solid #c6c6c6;

  margin-bottom: 32px;
  width: 1088px;
`

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
  right: 25px;
  bottom: 25px;
  display: flex;
`
export const Icon = styled.img`
  width: 12px;
  height: 12px;
`

export const CommentWrapper = styled.div``
export const CommentTitle = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`
export const CommentCount = styled.span`
  color: #01cb45;
  word-wrap: break-word; /*불확실*/
`

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
