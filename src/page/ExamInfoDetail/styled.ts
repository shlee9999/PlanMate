import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleTypoWrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  height: 45px;
`
export const TagWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`
export const Tag = styled.div``
export const TitleTypo = styled.div`
  font-size: 21px;
  font-weight: 700;
`
export const UpdatedDate = styled.div``
export const Nickname = styled.div``

export const Content = styled.div`
  /* display: flex;
  flex-direction: column; */
  box-sizing: border-box;
  padding: 32px 8px;
  width: 1088px;
  font-size: 14px;
  font-weight: 400;
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
  position: absolute;
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
