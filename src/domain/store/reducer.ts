import { combineReducers } from 'redux'

import { reducer as examplesReducer } from '../examples/reducer'

import { State } from './State'

export const reducer = combineReducers<State>({
  examples: examplesReducer,
})
