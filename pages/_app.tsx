import { get } from 'lodash-es';
import { getSnapshot } from 'mobx-state-tree';
import App from 'next/app';
import React from 'react';
import 'reset-css';

import { CommonMeta } from '@app/core/components/meta';
import { StoreLogger } from '@app/core/components/store-logger';
import { canUseDOM } from '@app/core/helpers/canUseDom';
import { TranslateDict } from '@app/core/libs/WithTranslate';
import '@app/core/styles/fonts.css';
import '@app/core/styles/layout.css';
import { initializeApp } from '@app/initialize/initializeApp';
import { initializeStore } from '@app/initialize/initializeStore';
import { Layout } from '@app/modules/layout';
import { storeContext } from '@app/stores/root/helpers/storeContext';
import { SelfRootStore } from '@app/stores/root/Root';
import { MobxAppContextType } from '@app/stores/root/types/Context';
import bugsnagClient from '@app/core/libs/bugsnag/bugsnag';
import { BugsnagError } from '@app/modules/error/BugsnagError';
import '@app/core/components/use-modal/ModalContainer/ModalContainer.css';

import ErrorPage from './_error';

const { appWithTranslation } = require('@app/core/libs/i18n');
const ErrorBoundary = bugsnagClient.getPlugin('react');

// TODO: fix types
class NextApp extends (App as any) {
  public static async getInitialProps({ Component, ctx }: MobxAppContextType) {
    /* initialize store on server */
    const store = initializeApp(ctx);

    ctx.store = store;

    let pageProps = {};

    if (Component.getInitialProps) {
      try {
        pageProps = await Component.getInitialProps(ctx);
      } catch (error) {
        pageProps['statusCode'] = get(error, 'statusCode');
      }
    }

    await Promise.all([ctx.store.pageMeta.loadPageMeta()]);

    return {
      initialState: getSnapshot(store),
      isServer: !canUseDOM(),
      pageProps,
      namespacesRequired: [TranslateDict.COMMON],
    };
  }

  componentDidMount() {
    this.store.data.fetchData();
  }
  private readonly store: SelfRootStore;

  constructor(props: any) {
    super(props);

    /* initialize store from snapshots */
    this.store = initializeStore({
      isServer: !canUseDOM(),
      snapshot: props.initialState,
      token: '',
    }) as SelfRootStore;
  }

  public render() {
    const { Component, pageProps } = this.props;
    const { statusCode } = pageProps;

    return (
      <ErrorBoundary FallbackComponent={BugsnagError}>
        <storeContext.Provider value={this.store}>
          <CommonMeta />
          <Layout isError={!!statusCode}>
            {!!statusCode ? (
              <ErrorPage statusCode={statusCode} />
            ) : (
              <Component {...pageProps} />
            )}
            <StoreLogger log />
          </Layout>
        </storeContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default appWithTranslation(NextApp as any);
