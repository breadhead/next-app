import { combineReducers } from 'redux'

import { reducer as examplesReducer } from '../time/reducer'

import { State } from './State'

export const reducer = combineReducers<State>({
  examples: examplesReducer,
})
