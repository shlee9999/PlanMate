import { FC } from 'react'
import { Root } from './styled'
import { useSelector } from 'react-redux'
import { Globals } from 'types'
import { tabList } from 'constants/tabList'

type MainSectionProps = {}

const MainSection: FC<MainSectionProps> = () => {
  const currentTab = useSelector((state: Globals) => state.currentTab)

  return (
    <Root>
      <div>{tabList[currentTab].component}</div>
    </Root>
  )
}

export default MainSection
