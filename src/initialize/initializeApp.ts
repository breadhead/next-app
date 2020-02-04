import { NextPageContext } from 'next';
import nextCookie from 'next-cookies';

import { initializeStore } from '@app/initialize/initializeStore';
import { canUseDOM } from '@app/core/helpers/canUseDom';

export function initializeApp(ctx: NextPageContext) {
  const { token = '' } = nextCookie(ctx);
  const isServer = !canUseDOM();

  return initializeStore({
    isServer,
    snapshot: null,
    token: token,
  });
}
