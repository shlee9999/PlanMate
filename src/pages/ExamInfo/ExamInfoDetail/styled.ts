import { EXAMINFOITEM_MAX_WIDTH, EXAMINFOITEM_MIN_WIDTH } from 'constants/layout'
import { RegisterButton, TagRoot } from 'styled'
import styled from 'styled-components'
import hollowLikeImg from 'assets/images/like_button_hollow.png'
import filledLikeImg from 'assets/images/like_button_filled.png'
import hollowScrapImg from 'assets/images/scrap_button_filled.png'
import filledScrapImg from 'assets/images/scrap_button_hollow.png'

export const Root = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 40px 0;
  max-width: ${EXAMINFOITEM_MAX_WIDTH}px;
  min-width: ${EXAMINFOITEM_MIN_WIDTH}px;
`

export const TagWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  margin-bottom: 3px;
`
export const Tag = styled(TagRoot)`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #888888;
`
export const UserNickname = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #222222;
`
export const UpperTypoWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`
export const LeftTypoWrapper = styled.span`
  margin-left: 10px;
`
export const TitleTypoWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: end;
  height: 26px;
  column-gap: 6px;
`

export const RightTypoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const PostOwnerNickname = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
  color: #666666;
  margin-right: 12px;
`
const ButtonTypo = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const EditTypo = styled(ButtonTypo)`
  margin-right: 5px;
`
export const DistributionLine = styled.hr`
  border: none;
  display: inline-block;
  background-color: #888888;
  width: 1px;
  height: 12px;
  margin-right: 5px;
`
export const DeleteTypo = styled(ButtonTypo)``
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
export const Nickname = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
`

export const ContentWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 32px 8px;
  font-size: 14px;
  font-weight: 400;
  border-top: 2px solid #444444;
  border-bottom: 1px solid #c6c6c6;
  margin-bottom: 32px;
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
type LikeImgProps = {
  isLiked: boolean
}
type ScrapImgProps = {
  isScrapped: boolean
}
export const LikeImg = styled.img.attrs<LikeImgProps>((props) => ({
  src: props.isLiked ? filledLikeImg : hollowLikeImg,
}))<LikeImgProps>`
  width: 13px;
  height: 12px;
  margin-right: 2px;
`

const ImgButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #666666;
`
export const LikeButton = styled(ImgButton)``
export const ScrapButton = styled(ImgButton)``
export const ScrapImg = styled.img.attrs<ScrapImgProps>((props) => ({
  src: props.isScrapped ? hollowScrapImg : filledScrapImg,
}))<ScrapImgProps>`
  width: 9px;
  height: 12px;
  margin-right: 3px;
`
export const CommentWrapper = styled.div`
  margin-bottom: 24px;
`
export const CommentTitle = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 24px;
`
export const CommentCount = styled.span`
  color: #01cb45;
  word-wrap: break-word; /*불확실*/
`

export const CommentContainer = styled.div`
  border-top: 1px solid #c6c6c6;
`
export const CommentBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: ${EXAMINFOITEM_MAX_WIDTH}px;
  min-width: ${EXAMINFOITEM_MIN_WIDTH}px;
`
export const CommentBox = styled.textarea`
  box-sizing: border-box;
  padding: 9px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #c6c6c6;
  background-color: #f9f9f9;

  &::placeholder {
    color: #c6c6c6;
  }
`
export const CommentRegisterButton = styled(RegisterButton)`
  align-self: flex-end;
`
