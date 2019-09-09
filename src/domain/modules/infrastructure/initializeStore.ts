import axios from 'axios'
import { get } from 'lodash'
import makeInspectable from 'mobx-devtools-mst'
import { applySnapshot } from 'mobx-state-tree'
import { RootStore, IStore } from '../models/Root'
import { initializeApiClient } from '../models/Api'

let store: IStore = null as any

const storeFactory = (token?: string) =>
  RootStore.create(
    { book: { value: '', counter: 234 }, user: { token: '' } },
    { api: initializeApiClient(token) },
  )

export const initializeStore = (
  isServer: boolean,
  snapshot = null,
  token?: string,
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
