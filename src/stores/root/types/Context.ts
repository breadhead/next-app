import { NextPageContext, NextComponentType } from 'next';
import { AppType } from 'next-server/dist/lib/utils';
import { NextRouter } from 'next/router';
import { Assign } from 'utility-types';

import { IStore } from '../Root';

export type MobxNextPageContext = Assign<NextPageContext, { store: IStore }>;

export interface MobxAppContextType<R extends NextRouter = NextRouter> {
  Component: NextComponentType<MobxNextPageContext>;
  AppTree: AppType;
  ctx: MobxNextPageContext;
  router: R;
}
