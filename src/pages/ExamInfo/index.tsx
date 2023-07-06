import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import { BulletinButton, Root } from './styled'
import { useEffect, useState } from 'react'
import { findAll } from 'api/post/find/findAll'
import { ResponsePostType } from 'api/common/commonType'
import { useNavigate } from 'react-router-dom'

export const ExamInfoPage = () => {
  const navigate = useNavigate()
  const [ExamInfoList, setExamInfoList] = useState<ResponsePostType[]>([])
  const onClickBulletinButton = (): void => {
    navigate('/examinfo/post')
  }
  async function loadExamInfoList() {
    await findAll({
      pages: 0,
    }).then((res: ResponsePostType | any) => {
      setExamInfoList(res)
    })
  }
  useEffect(() => {}, [])

  return (
    <Root>
      {ExamInfoList.map((sampleInfo, index) => (
        <ExamInfoItem {...sampleInfo} key={index} />
      ))}
      <BulletinButton onClick={onClickBulletinButton}>글쓰기</BulletinButton>
    </Root>
  )
}
