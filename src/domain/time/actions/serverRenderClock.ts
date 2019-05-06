import { AnyAction, Dispatch } from 'redux'

import { actions } from '../reducer'

export const serverRenderClock = () => (dispatch: Dispatch<AnyAction>) =>
  dispatch(actions.tick(Date.now()))
