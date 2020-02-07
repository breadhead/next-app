import { types } from 'mobx-state-tree';

import { MarkDef } from './MarkDef';
import { PostChildrenModel } from './PostChildrenModel';

export const PostBodyModel = types.model({
  _key: types.string,
  _type: types.string,
  order: types.maybe(types.number),
  children: types.array(PostChildrenModel),
  markDefs: types.array(MarkDef),
  style: types.maybe(types.string),
  name: types.maybe(types.string),
  link: types.maybe(types.string),
  asset: types.maybe(types.model({ _ref: types.string })),
  text: types.maybe(types.array(PostChildrenModel)),
});
