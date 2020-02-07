import { types } from 'mobx-state-tree';

export const SanityDefaultModel = types.model({
  _createdAt: types.string,
  _id: types.identifier, //types.string,
  _rev: types.string,
  _type: types.string,
  _updatedAt: types.string,
});
