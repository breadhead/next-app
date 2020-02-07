import { types } from 'mobx-state-tree';

export const MarkDef = types.model({
  _key: types.string,
  _type: types.string,
  href: types.string,
});
