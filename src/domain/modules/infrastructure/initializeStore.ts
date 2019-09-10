import axios from 'axios'
import { get } from 'lodash'
import makeInspectable from 'mobx-devtools-mst'
import { applySnapshot } from 'mobx-state-tree'
import { RootStore, IStore } from '../models/Root'
import { initializeApiClient } from '../models/Api'
import { Option } from 'tsoption'
import { CustomOption } from '@app/lib/customOption'

let store: IStore = null as any

const storeFactory = (token: Option<string>) =>
  RootStore.create(
    {
      book: { value: '', counter: 234 },
      user: { token },
    },
    { api: initializeApiClient(token) },
  )

export const initializeStore = (
  isServer: boolean,
  snapshot = null,
  token: Option<string> = Option.of(undefined),
) => {
  if (isServer) {
    store = storeFactory(token)
  }
  if ((store as IStore) === null) {
    store = storeFactory(store.user.token)
  }
  if (snapshot) {
    applySnapshot(store, snapshot)
  }

  makeInspectable(store)
  return store
}
