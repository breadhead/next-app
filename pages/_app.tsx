import { Provider } from 'mobx-react';
import App, { Container } from 'next/app';
import React from 'react';
import 'reset-css';

/* order is important because of mixins */
import '@app/ui/globals/queries.css?CSSModulesDisable';
import '@app/ui/globals/colors.css?CSSModulesDisable';
import '@app/ui/globals/fonts.css?CSSModulesDisable';
import '@app/ui/globals/utils.css?CSSModulesDisable';
import '@app/ui/globals/layout.css?CSSModulesDisable';

import { initializeStore } from '@app/domain/store/store';

class MyMobxApp extends App {
  static async getInitialProps(appContext: any) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore();
    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore;

    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props: any) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  mobxStore: any;

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={this.mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
export default MyMobxApp;
