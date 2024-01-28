const BLOCK_NAV = 'nav/BLOCK_NAV' as const
const APPROVE_NAV = 'nav/APPROVE_NAV' as const
//Appoint
export const blockNav = () => ({
  type: BLOCK_NAV,
})

export const approveNav = () => ({
  type: APPROVE_NAV,
})

//Appoint
type IsNavBlockedAction = ReturnType<typeof blockNav> | ReturnType<typeof approveNav>

const InitialIsNavBlockedState = false

function isNavBlocked(state: boolean = InitialIsNavBlockedState, action: IsNavBlockedAction) {
  switch (action.type) {
    case BLOCK_NAV:
      return true

    case APPROVE_NAV:
      return false

    default:
      return state
  }
}

export default isNavBlocked
