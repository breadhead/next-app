import 'reset-css';
/* order is important because of mixins */
import '@app/ui/globals/queries.css?CSSModulesDisable';
import '@app/ui/globals/colors.css?CSSModulesDisable';
import '@app/ui/globals/fonts.css?CSSModulesDisable';
import '@app/ui/globals/utils.css?CSSModulesDisable';
import '@app/ui/globals/layout.css?CSSModulesDisable';

import { Provider } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import App from 'next/app';
import { AppContext, AppProps } from 'next/dist/pages/_app';
import React from 'react';
import { get } from 'lodash';
import { IStore } from '@app/domain/modules/models/Root';
import { storeContext } from '@app/domain/modules/infrastructure/storeContext';
import { canUseDOM } from '@app/lib/CanUseDom';
import { initializeStore } from '@app/domain/modules/infrastructure/initializeStore';
import { AppPropsType } from 'next-server/dist/lib/utils';
import { NextRouter } from 'next/router';
import { initializeToken } from '@app/domain/modules/models/user/UserService';
import { Option } from 'tsoption';
import { CustomOption } from '@app/lib/customOption';

interface IOwnProps {
  isServer: boolean;
  initialState: IStore;
}

class MyApp extends App<AppProps<IOwnProps>> {
  public static async getInitialProps({ Component, ctx }: AppContext) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = !canUseDOM();
    const token = get(ctx, 'req.cookies.token') as string | undefined;
    const store = initializeStore(isServer, null, Option.of(token));
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

    this.store = initializeStore(
      props.isServer,
      props.initialState,
      CustomOption.create(props.initialState.user.token),
    ) as IStore;
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
