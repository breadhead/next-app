import { createContext, useContext } from 'react';

import { IStore } from '../models/root/Root';

export const storeContext = createContext<IStore | null>(null);

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('you forgot to use StoreProvider, what a pity');
  }

  return store;
};