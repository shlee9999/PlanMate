import { ActionButton, NoContentDescription, Spinner } from 'components'
import { EXAMINFOITEM_MIN_WIDTH } from 'constants/layout'
import { TagSelector } from 'pages/ExamInfo/components'
import styled from 'styled-components'

export const PostContainer = styled.div`
  min-width: ${EXAMINFOITEM_MIN_WIDTH}px;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text.gray1};
  /* background-color: tomato; */
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoContent = styled(NoContentDescription)`
  margin-top: 84px;
  margin-bottom: 100px;
`
export const PostSpinner = styled(Spinner)`
  margin: 80px 0;
`
export const BulletinButton = styled(ActionButton)`
  align-self: flex-end;
  margin: 24px 0;
  bottom: -50px;
`

export const StyledTagSelector = styled(TagSelector)`
  position: absolute;
  top: -40px;
  right: 0;
`
export const PaginationWrapper = styled.div`
  position: relative;
  width: 100%;
`
