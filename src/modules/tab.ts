const CHANGE_TAB = 'timer/CHANGE_TAB' as const

export const changeTab = (tabNumber: number) => ({ type: CHANGE_TAB, payload: tabNumber })

type TabAction = ReturnType<typeof changeTab>

type TabState = {
  currentTab: number
}

const InitialState: TabState = {
  currentTab: 0,
}

function tab(state: TabState = InitialState, action: TabAction) {
  switch (action.type) {
    case CHANGE_TAB:
      return { currentTab: action.payload }
    default:
      return state
  }
}

export default tab
