import { createContext, useContext } from 'react';

import { SelfRootStore } from '../Root';

export const storeContext = createContext<SelfRootStore | null>(null);

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('you forgot to use StoreProvider, what a pity');
  }

  return store;
};
