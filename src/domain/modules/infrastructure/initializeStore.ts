import makeInspectable from 'mobx-devtools-mst'
import { applySnapshot } from 'mobx-state-tree'
import { BaseRouter } from 'next-server/dist/lib/router/router'
import { Option } from 'tsoption'
import { initializeApiClient } from '../models/Api'
import { IStore, RootStore } from '../models/Root'

let store: IStore = null as any

export interface StoreFactoryProps {
  token: Option<string>
}
const storeFactory = ({ token }: StoreFactoryProps) =>
  RootStore.create(
    {
      book: { value: '', counter: 234 },
      user: { token },
    },
    { api: initializeApiClient(token) },
  )

export const initializeStore = ({
  isServer,
  snapshot,
  token,
}: InitializeStoreProps) => {
  if (isServer) {
    store = storeFactory({ token })
  }
  if ((store as IStore) === null) {
    store = storeFactory({ token })
  }
  if (snapshot) {
    applySnapshot(store, snapshot)
  }

  makeInspectable(store)
  return store
}

export interface InitializeStoreProps {
  isServer: boolean
  snapshot: any
  token: Option<string>
}
