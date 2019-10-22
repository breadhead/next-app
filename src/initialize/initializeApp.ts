import { get } from 'lodash';
import { NextPageContext } from 'next';
import { Option } from 'tsoption';

import { initializeStore } from '@app/initialize/initializeStore';
import { canUseDOM } from '@app/lib/CanUseDom';

export function initializeApp(ctx: NextPageContext) {
  const token = get(ctx, 'req.cookies.token');
  const isServer = !canUseDOM();

  return initializeStore({
    isServer,
    snapshot: null,
    token: Option.of(token),
  });
}
