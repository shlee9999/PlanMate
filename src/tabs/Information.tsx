//수험정보 탭

import { ExamInfoItem } from 'components/ExamInfoItem'

const exampleInfo = {
  title: '예시',
  like: 1,
  scrap: 2,
  comment_count: 3,
  nickname: '닉네임',
  updated_at: '2023-06-12',
}
const Information = () => {
  return (
    <>
      <ExamInfoItem {...exampleInfo} />
    </>
  )
}

export default Information
