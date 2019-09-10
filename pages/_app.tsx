import '@app/ui/globals/colors.css?CSSModulesDisable';
import '@app/ui/globals/fonts.css?CSSModulesDisable';
import '@app/ui/globals/layout.css?CSSModulesDisable';
import '@app/ui/globals/queries.css?CSSModulesDisable';
/* order is important because of mixins */
import '@app/ui/globals/utils.css?CSSModulesDisable';
import { get } from 'lodash';
import { getSnapshot } from 'mobx-state-tree';
import App from 'next/app';
import { AppContext, AppProps } from 'next/dist/pages/_app';
import React from 'react';
import 'reset-css';
import { Option } from 'tsoption';

import { initializeStore } from '@app/domain/modules/infrastructure/initializeStore';
import { storeContext } from '@app/domain/modules/infrastructure/storeContext';
import { IStore } from '@app/domain/modules/models/Root';
import { initializeToken } from '@app/domain/modules/models/user/initializeToken';
import NextI18Next from '@app/features/i18n/i18n';
import { canUseDOM } from '@app/lib/CanUseDom';
import { CustomOption } from '@app/lib/customOption';

interface IOwnProps {
  isServer: boolean;
  initialState: IStore;
}

class MyApp extends App<AppProps<IOwnProps>> {
  public static async getInitialProps({ Component, ctx, router }: AppContext) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //

    const isServer = !canUseDOM();
    const token = get(ctx, 'req.cookies.token') as string | undefined;

    const store = initializeStore({
      isServer,
      snapshot: null,
      token: Option.of(token),
    });
    (ctx as any).store = store;

    initializeToken(ctx);
    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      initialState: getSnapshot(store),
      isServer,
      pageProps,
    };
  }

  private store: IStore;

  constructor(props: any) {
    super(props);

    this.store = initializeStore({
      isServer: props.isServer,
      snapshot: props.initialState,
      token: CustomOption.create(props.initialState.user.token),
    }) as IStore;
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <storeContext.Provider value={this.store}>
        <Component {...pageProps} />
      </storeContext.Provider>
    );
  }
}

export default MyApp;
