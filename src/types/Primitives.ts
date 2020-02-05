import { types, Instance } from 'mobx-state-tree';

export const ImageModel = types.model({
  code: types.string,
  path: types.string,
  nameOptions: types.maybeNull(
    types.model({
      title: types.maybeNull(types.string),
      alt: types.maybeNull(types.string),
    }),
  ),
  sizeOptions: types.maybeNull(
    types.model({
      preview: types.string,
      detail: types.string,
    }),
  ),
});

export interface Image extends Instance<typeof ImageModel> {}
