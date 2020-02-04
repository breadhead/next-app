import makeInspectable from 'mobx-devtools-mst';
import { applySnapshot } from 'mobx-state-tree';

import { InitialStateRoot } from '@app/stores/root/initialState';
import { SelfRootStore, RootStore } from '@app/stores/root/Root';
import { getFromConfig } from '@app/core/libs/getPublicRuntimeConfig';

import { initializeApiClient } from './initializeApiClient';

let store: SelfRootStore = null as any;

export interface StoreFactoryProps {
  token: string;
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
  if ((store as SelfRootStore) === null) {
    store = storeFactory({ token });
  }
  if (snapshot) {
    applySnapshot(store, snapshot);
  }

  makeInspectable(store);

  if (!isServer && ((window as any).Cypress || !!getFromConfig('isDev'))) {
    (window as any).store = store;
  }

  return store;
};

export interface InitializeStoreProps {
  isServer: boolean;
  token: string;
  snapshot?: any;
}
