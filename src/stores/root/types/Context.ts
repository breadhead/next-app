import { NextPageContext, NextComponentType } from 'next';
import { NextRouter } from 'next/router';
import { Assign } from 'utility-types';

import { SelfRootStore } from '../Root';

export type MobxNextPageContext = Assign<
  NextPageContext,
  { store: SelfRootStore }
>;

export interface MobxAppContextType<R extends NextRouter = NextRouter> {
  Component: NextComponentType<MobxNextPageContext>;
  AppTree: any;
  ctx: MobxNextPageContext;
  router: R;
}
