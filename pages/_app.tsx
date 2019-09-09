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
import React from 'react';

import { IStore, initializeStore } from '@app/domain/store/root';
import { storeContext } from '@app/domain/store/storeContext';
import { canUseDOM } from '@app/lib/CanUseDom';

interface IOwnProps {
  isServer: boolean;
  initialState: IStore;
}

class MyApp extends App<IOwnProps> {
  public static async getInitialProps({ Component, ctx }: any) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = !canUseDOM();
    const store = initializeStore(isServer);
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

    this.store = initializeStore(props.isServer, props.initialState) as IStore;
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
