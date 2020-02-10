import { types } from 'mobx-state-tree';

export const LocaleStringModel = types.model({
  _type: types.string,
  ru: types.maybe(types.string),
  en: types.maybe(types.string),
});
