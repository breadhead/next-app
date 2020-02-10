import { types, Instance } from 'mobx-state-tree';

export const LocalePostModel = types.model({
  _type: types.maybe(types.string),
  ru: types.maybe(types.frozen()),
  en: types.maybe(types.frozen()),
});

export interface LocalePost extends Instance<typeof LocalePostModel> {}