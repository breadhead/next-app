import { types } from 'mobx-state-tree';

export const PostChildrenModel = types.model({
  _key: types.string,
  _type: types.string,
  marks: types.array(types.string),
  text: types.maybe(types.string),
});
