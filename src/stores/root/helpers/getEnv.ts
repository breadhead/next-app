import { getEnv as getEnvMobx } from 'mobx-state-tree';

import ApiService from '@app/service/api';

export interface Env {
  api: ApiService;
}

export const getEnv = <T>(self: T) => getEnvMobx<Env>(self);
export const getApiService = <T>(self: T): ApiService => getEnv(self).api;
