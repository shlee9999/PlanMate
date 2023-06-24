import { FC } from 'react'
import { Root } from './styled'

type ExamInfoProps = {
  className?: string
}

export const ExamInfo: FC<ExamInfoProps> = ({ className }) => {
  return <Root className={className}>ExamInfo</Root>
}
