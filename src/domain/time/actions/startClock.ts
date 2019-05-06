import { Dispatch } from 'redux'

import { actions } from '../reducer'

export const startClock = (dispatch: Dispatch<any>) => {
  return setInterval(() => dispatch(actions.tick(Date.now())), 1000)
}
