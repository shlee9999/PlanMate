//수험정보 탭

import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import { Root } from './styled'
import sampleInfoList from 'constants/sampleInfoList.json'

export const ExamInfoTab = () => {
  return (
    <Root>
      {sampleInfoList.post_info_list.map((sampleInfo, index) => (
        <ExamInfoItem {...sampleInfo} key={index} />
      ))}
    </Root>
  )
}
