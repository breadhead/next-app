import { types, Instance } from 'mobx-state-tree';

import { PageMetaModel } from '@app/types/PageMeta';

import { ActionsPageMeta } from './actions';
import { Views } from './views';

export const PageMetaStore = types
  .model({
    _entities: PageMetaModel,
  })
  .actions(ActionsPageMeta)
  .views(Views);

export interface SelfPageMetaStore extends Instance<typeof PageMetaStore> {}
