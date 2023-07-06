//수험정보 탭

import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import { BulletinButton, Root } from './styled'
import sampleInfoList from 'constants/sampleInfoList.json'
import { createPost } from 'api/post/createPost'
import { useEffect, useState } from 'react'
import { checkPost } from 'api/post/checkPost'
import { BulletinTab } from './BulletinTab'

export const ExamInfoTab = () => {
  const [isBulletin, setIsBulletin] = useState<boolean>(false)
  const onClickBulletinButton = () => {
    // createPost({
    //   content: '게시물 내용',
    //   tagList: ['태그1', '태그2'],
    //   title: '테스트 게시물1',
    // }).then((res) => {
    //   console.log(res)
    // })
    setIsBulletin(true)
  }
  const cancelBulletin = (): void => {
    setIsBulletin(false)
  }
  useEffect(() => {
    checkPost({ postId: 78 }) //여기서 api로 게시물 리스트 호출
  }, [])
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
