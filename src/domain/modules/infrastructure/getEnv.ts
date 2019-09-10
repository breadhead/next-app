import { getEnv as getEnvMobx } from 'mobx-state-tree';

import { Env } from './env';

export const getEnv = <T>(self: T) => getEnvMobx<Env>(self);
