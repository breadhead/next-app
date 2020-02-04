import { types, Instance } from 'mobx-state-tree';

export const PageMetaItemModel = types.model({
  rule: types.string,
  meta: types.maybeNull(types.frozen()),
});

export const PageMetaModel = types.array(PageMetaItemModel);

export interface PageMeta extends Instance<typeof PageMetaModel> {}
export interface PageMetaItem extends Instance<typeof PageMetaItemModel> {}
