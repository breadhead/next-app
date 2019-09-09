import React, { createContext, useContext } from 'react';
import { IStore } from './root';
import { useLocalStore } from 'mobx-react';

export const storeContext = createContext<IStore | null>(null);

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('you forgot to use StoreProvider, what a pity');
  }

  return store;
};
