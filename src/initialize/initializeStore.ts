import makeInspectable from 'mobx-devtools-mst';
import { applySnapshot } from 'mobx-state-tree';
import { Option } from 'tsoption';

import { InitialStateRoot } from '@app/stores/root/initialState';
import { IStore, RootStore } from '@app/stores/root/Root';

import { initializeApiClient } from './initializeApiClient';

let store: IStore = null as any;

export interface StoreFactoryProps {
  token: Option<string>;
}
const storeFactory = ({ token }: StoreFactoryProps) =>
  RootStore.create(
    {
      ...InitialStateRoot,
    },
    { api: initializeApiClient(token) },
  );

export const initializeStore = ({
  isServer,
  snapshot,
  token,
}: InitializeStoreProps) => {
  if (isServer) {
    store = storeFactory({ token });
  }
  if ((store as IStore) === null) {
    store = storeFactory({ token });
  }
  if (snapshot) {
    applySnapshot(store, snapshot);
  }

  makeInspectable(store);
  return store;
};

export interface InitializeStoreProps {
  isServer: boolean;
  token: Option<string>;
  snapshot?: any;
}
