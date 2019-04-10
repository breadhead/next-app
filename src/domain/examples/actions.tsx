import { AnyAction, Dispatch } from 'redux'

import { actions } from './reducer'

export const serverRenderClock = (isServer: boolean) => (
  dispatch: Dispatch<AnyAction>,
) => dispatch(actions.tick(Date.now(), !isServer))

export const startClock = (dispatch: Dispatch<any>) =>
  setInterval(() => dispatch(actions.tick(Date.now(), true)), 1000)
