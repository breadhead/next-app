import { getRoot as getRootMobx, IAnyStateTreeNode } from 'mobx-state-tree';

import { SelfRootStore } from '../Root';

export const getRoot = (store: IAnyStateTreeNode): SelfRootStore =>
  getRootMobx(store);
