import styled from 'styled-components'
import likeImg from 'assets/images/like.png'
export const Root = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  border-top: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;
`
export const UpperTypoWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: end;
  column-gap: 4px;
`
export const LeftContainer = styled.div`
  padding: 16px 0 14px 0;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
export const PostOwnerNickname = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
  color: #666666;
`
export const CommentOwnerNickname = styled.p``
export const UserNickname = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #222222;
`
export const Date = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  color: #888888;
  margin-bottom: 1px;
`
export const Comment = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #222222;
`
export const ReplyButton = styled.button`
  width: 48px;
  height: 28px;
  border-radius: 28px;
  border: 1px solid #c6c6c6;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #666666;
`
export const LikeImg = styled.img`
  content: url(${likeImg});
  width: 12px;
  height: 12px;
`
export const LikeButton = styled.button`
  margin: 15px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  //boolean값 받아와야할듯
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #666666;
`
