import { canUseDOM } from '@app/lib/CanUseDom';
import { CustomOption } from '@app/lib/customOption';

import '@app/ui/globals/colors.css?CSSModulesDisable';
import '@app/ui/globals/fonts.css?CSSModulesDisable';
import '@app/ui/globals/layout.css?CSSModulesDisable';
import '@app/ui/globals/queries.css?CSSModulesDisable';
/* order is important because of mixins */
import '@app/ui/globals/utils.css?CSSModulesDisable';
import { getSnapshot } from 'mobx-state-tree';
import App from 'next/app';
import { AppContext, AppProps } from 'next/dist/pages/_app';
import React from 'react';
import 'reset-css';
import { initializeApp } from '@app/initialize/initializeApp';
import { IStore } from '@app/stores/root/Root';
import { initializeStore } from '@app/initialize/initializeStore';
import { storeContext } from '@app/stores/root/helpers/storeContext';
import { Some } from 'tsoption';

interface IOwnProps {
  isServer: boolean;
  initialState: IStore;
}

class MyApp extends App<AppProps<IOwnProps>> {
  public static async getInitialProps({ Component, ctx }: AppContext) {
    /* initialize store on server */
    const store = initializeApp(ctx);

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      initialState: getSnapshot(store),
      isServer: !canUseDOM(),
      pageProps,
    };
  }

  private store: IStore;

  constructor(props: any) {
    super(props);

    /* initialize store from snapshots */
    this.store = initializeStore({
      isServer: props.isServer,
      snapshot: props.initialState,
      token: new Some(' '),
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
