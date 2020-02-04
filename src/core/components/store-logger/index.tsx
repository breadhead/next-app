import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';

import { useStore } from '@app/stores/root/helpers/storeContext';

interface Props {
  log?: boolean;
}

export const StoreLogger = observer(({ log }: Props) => {
  const store = useStore();
  if (log) {
    console.log('TCL: StoreLogger -> store', getSnapshot(store));
  }
  return null;
});
