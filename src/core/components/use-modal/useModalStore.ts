import { useCallback } from 'react';

import { useStore } from '@app/stores/root/helpers/storeContext';

export const useModalStore = () => {
  const store = useStore();
  const add = useCallback((key: string) => store.modal.update(key, true), [
    store,
  ]);
  const remove = useCallback((key: string) => store.modal.remove(key), [store]);
  const exist = useCallback((key: string) => store.modal.modals.has(key), [
    store,
  ]);

  return { add, remove, exist };
};
