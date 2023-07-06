//수험정보 탭

import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import { BulletinButton, Root } from './styled'
import { useEffect, useState } from 'react'
import { BulletinTab } from './BulletinTab'
import { findAll } from 'api/post/find/findAll'
import { ResponsePostType } from 'api/common/commonType'

export const ExamInfoTab = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }
  const [isBulletin, setIsBulletin] = useState<boolean>(false)
  const onClickBulletinButton = () => {
    setIsBulletin(true)
  }
  const cancelBulletin = (): void => {
    setIsBulletin(false)
  }
  const [ExamInfoList, setExamInfoList] = useState<ResponsePostType[]>([])
  async function loadExamInfoList() {
    await findAll({
      pages: 0,
    }).then((res: ResponsePostType | any) => {
      setExamInfoList(res)
    })
  }
  useEffect(() => {
    scrollToTop()
    setTimeout(() => {
      loadExamInfoList()
    }, 500)
  }, [isBulletin])

  if (!isBulletin)
    return (
      <Root>
        {ExamInfoList.map((sampleInfo, index) => (
          <ExamInfoItem {...sampleInfo} key={index} />
        ))}
        <BulletinButton onClick={onClickBulletinButton}>글쓰기</BulletinButton>
      </Root>
    )
  return <BulletinTab cancelBulletin={cancelBulletin} />
}
