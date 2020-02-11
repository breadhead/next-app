import { types, Instance } from 'mobx-state-tree';

export const LocalePostModel = types.frozen();

export interface LocalePost extends Instance<typeof LocalePostModel> {}
