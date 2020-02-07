import { Instance, types } from 'mobx-state-tree';

import { MarkDef } from './MarkDef';
import { PostChildrenModel } from './PostChildrenModel';

export const PrincipleModel = types.model({
  _key: types.string,
  _type: types.string,
  children: types.array(PostChildrenModel),
  markDefs: types.maybe(types.array(MarkDef)),
  style: types.string,
});

export const PrinciplesModel = types.model({
  _key: types.string,
  _type: types.string,
  order: types.maybe(types.number),
  children: types.maybe(types.array(PostChildrenModel)),
  markDefs: types.maybe(types.array(MarkDef)),
  style: types.maybe(types.string),
  text: types.maybe(types.array(PrincipleModel)),
});

export interface PrinciplesModel extends Instance<typeof PrinciplesModel> {}
export interface PrincipleModel extends Instance<typeof PrincipleModel> {}
