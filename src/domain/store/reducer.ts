import { combineReducers } from 'redux'

import { reducer as timeReducer } from '../time/reducer'

import { State } from './State'

export const reducer = combineReducers<State>({
  time: timeReducer,
})
