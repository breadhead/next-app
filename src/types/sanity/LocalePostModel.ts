import { types } from 'mobx-state-tree';

export const LocalePostModel = types.model({
  _type: types.string,
  ru: types.maybe(types.frozen()),
  en: types.maybe(types.frozen()),
});
