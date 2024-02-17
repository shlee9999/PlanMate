import * as s from './styled'
import { Display } from 'components'
import { DISPLAY } from 'types'
import { PostContainer } from './PostContainer/PostContainer'

export const ExamInfoPage = () => {
  return (
    <s.ExamInfoPage>
      <s.TypoContainer>
        <s.UpperDescriptionTypo>유용한 정보를 찾아볼까요? </s.UpperDescriptionTypo>
        <s.TitleTypo>수험정보 👀</s.TitleTypo>
        <Display on={DISPLAY.XLARGE}>
          <s.LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</s.LowerDescriptionTypo>
        </Display>
        <Display on={DISPLAY.LARGE}>
          <s.LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</s.LowerDescriptionTypo>
        </Display>
      </s.TypoContainer>
      <PostContainer />
    </s.ExamInfoPage>
  )
}
