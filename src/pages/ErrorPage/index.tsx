import { FC } from 'react'
import { ErrorImg, LowerTypo, RetryButton, Root, UpperTypo } from './styled'
import noConnectionImg from 'assets/images/no_connection.png'
export const ErrorPage: FC = () => {
  return (
    <Root>
      <ErrorImg alt="error_img" src={noConnectionImg} />
      <UpperTypo>이런! 일시적인 오류에요.</UpperTypo>
      <LowerTypo>잠시 후 다시 시도해주세요.</LowerTypo>
      <RetryButton
        onClick={() => {
          window.location.reload()
        }}
      >
        다시 시도
      </RetryButton>
    </Root>
  )
}
