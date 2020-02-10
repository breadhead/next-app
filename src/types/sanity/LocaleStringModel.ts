import { types, Instance } from 'mobx-state-tree';

export const LocaleStringModel = types.model({
  _type: types.maybe(types.string),
  ru: types.maybe(types.string),
  en: types.maybe(types.string),
});

export interface LocaleString extends Instance<typeof LocaleStringModel> {}
