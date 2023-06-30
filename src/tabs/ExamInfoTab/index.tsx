//수험정보 탭

import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'

const exampleInfo = {
  title: '예시',
  like: 1,
  scrap: 2,
  comment_count: 3,
  nickname: '닉네임',
  updated_at: '2023-06-12',
}
export const ExamInfoTab = () => {
  return (
    <>
      <ExamInfoItem {...exampleInfo} />
    </>
  )
}
