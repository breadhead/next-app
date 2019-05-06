import { Dispatch } from 'redux'

import { actions } from '../reducer'

export const startClock = (dispatch: Dispatch<any>) => {
  return setInterval(() => {
    console.log('start clock')
    return dispatch(actions.tick(Date.now()))
  }, 1000)
}
