import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
  reducer as exampleReducer,
  State as ExampleState,
} from '@app/features/examples'

import ApiClient from './api/ApiClient'
import RealApiClient from './api/RealApiClient'

export interface State {
  example: ExampleState
}

const reducer = combineReducers({
  example: exampleReducer,
})

export interface ExtraArgs {
  api: ApiClient
}

export const initializeStore = (initialState?: State) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument({
          api: new RealApiClient(),
        } as ExtraArgs),
      ),
    ),
  )
