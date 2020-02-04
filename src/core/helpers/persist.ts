import { onSnapshot, applySnapshot, IStateTreeNode } from 'mobx-state-tree';

import { canUseDOM } from '@app/core/helpers/canUseDom';

interface Args {
  (name: string, store: IStateTreeNode): void;
}

interface StrToAnyMap {
  [key: string]: any;
}

export const persist: Args = (name, store) => {
  if (!canUseDOM()) return;
  let storage = localStorage;

  if (!storage) {
    throw Error(
      'localStorage (the default storage engine) is not ' +
        'supported in this environment. Please configure a different storage ' +
        'engine via the `storage:` option.',
    );
  }

  onSnapshot(store, (_snapshot: StrToAnyMap) => {
    let snapshot = { ..._snapshot };

    const data = JSON.stringify(snapshot);
    storage.setItem(name, data);
  });

  const data = storage.getItem(name);
  const snapshot = !isString(data) ? data : JSON.parse(data);

  if (!snapshot) {
    return;
  }

  applySnapshot(store, snapshot);
};

function isString(value: any): value is string {
  return typeof value === 'string';
}

export default persist;
