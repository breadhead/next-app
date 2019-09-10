import axios from 'axios'
import { get } from 'lodash'
import makeInspectable from 'mobx-devtools-mst'
import { applySnapshot } from 'mobx-state-tree'
import { RootStore, IStore } from '../models/Root'
import { initializeApiClient } from '../models/Api'
import { Option } from 'tsoption'
import { CustomOption } from '@app/lib/customOption'
import { BaseRouter } from 'next-server/dist/lib/router/router'

let store: IStore = null as any

export interface StoreFactoryProps {
  token: Option<string>
  history: BaseRouter
}
const storeFactory = ({ token, history }: StoreFactoryProps) =>
  RootStore.create(
    {
      book: { value: '', counter: 234 },
      user: { token },
      router: history,
    },
    { api: initializeApiClient(token) },
  )

export const initializeStore = ({
  isServer,
  snapshot,
  token,
  history,
}: InitializeStoreProps) => {
  if (isServer) {
    store = storeFactory({ token, history })
  }
  if ((store as IStore) === null) {
    store = storeFactory({ token, history })
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
  history: BaseRouter
}
