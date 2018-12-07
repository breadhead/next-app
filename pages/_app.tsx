import App, { Container } from 'next/app';
import React, { Component as ReactComponent } from 'react';
import { Provider } from 'react-redux';

import withReduxStore, { Store } from '@app/lib/with-redux-store';

interface Props {
  reduxStore: Store;
  pageProps: any;
  Component: ReactComponent;
}

class OncohelpWeb extends App<Props> {
  public render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(OncohelpWeb);
