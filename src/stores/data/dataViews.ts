import { DataStoreTypeNonNullable, DataStoreType } from './index';

const mainPage = (self: DataStoreType) =>
  self.nonNullableData.mainPageLanding[0];
const news = (self: DataStoreType) => self.nonNullableData.newsLanding;
const events = (self: DataStoreType) => self.nonNullableData.eventLanding;

export const dataViews = self => ({
  get mainPage() {
    return mainPage(self);
  },
  get news() {
    return news(self);
  },
  get events() {
    return events(self);
  },

  get nonNullableData() {
    return self._data as DataStoreTypeNonNullable;
  },
});
