import { get } from 'lodash';
import { NextPageContext } from 'next-server/dist/lib/utils';
import { Option } from 'tsoption';

import { initializeStore } from '@app/models/root/initializeStore';
import { initializeToken } from '@app/models/user/initializeToken';

import { canUseDOM } from './CanUseDom';

export function initializeApp(ctx: NextPageContext) {
  const token = Option.of(get(ctx, 'req.cookies.token'));
  const isServer = canUseDOM();
  const store = initializeStore({
    isServer,
    snapshot: null,
    token: token,
  });
  initializeToken(store, token);
  return store;
}
