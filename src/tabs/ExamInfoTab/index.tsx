//수험정보 탭

import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import { BulletinButton, Root } from './styled'
import sampleInfoList from 'constants/sampleInfoList.json'
import { useState } from 'react'
import { BulletinTab } from './BulletinTab'

export const ExamInfoTab = () => {
  const [isBulletin, setIsBulletin] = useState<boolean>(false)
  const onClickBulletinButton = () => {
    setIsBulletin(true)
  }
  const cancelBulletin = (): void => {
    setIsBulletin(false)
  }
  // useEffect(() => {
  // checkPost({ postId: 78 }) //여기서 api로 게시물 리스트 호출
  // }, [])
  if (!isBulletin)
    return (
      <Root>
        {sampleInfoList.postInfoList.map((sampleInfo, index) => (
          <ExamInfoItem {...sampleInfo} key={index} />
        ))}
        <BulletinButton onClick={onClickBulletinButton}>글쓰기</BulletinButton>
      </Root>
    )
  return <BulletinTab cancelBulletin={cancelBulletin} />
}
