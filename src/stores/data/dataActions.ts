import { flow } from 'mobx-state-tree';

import { getFromConfig } from '@app/core/libs/getPublicRuntimeConfig';
import { apiErrorHandler } from '@app/service/api/helper';
import { getApiService } from '@app/stores/root/helpers/getEnv';

import { SelfDataStore } from '.';

const fetchData = (self: SelfDataStore): any =>
  flow(function* fetch() {
    try {
      const data = yield getApiService(self).request(
        'get',
        `${getFromConfig(
          'siteUrl',
        )}/api/query/*[_type in ["mainPageLanding", "newsLanding", "eventLanding"]]`,
      );
      console.log('TCL: flow -> data', data);

      debugger;
    } catch (error) {
      return apiErrorHandler(error);
    }
  });

export const DataActions = self => ({
  fetchData: fetchData(self),
});
