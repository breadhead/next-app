import App, { Container } from 'next/app'
import { Api } from '@app/domain/api'
import { State } from '@app/domain/store/State'
import { AppContext } from '@app/domain/AppContext'
import { initializeStore } from '@app/domain/store/initializeStore'
import { StoreContext } from 'redux-react-hook'

import React from 'react'
import { Provider } from 'react-redux'

import { WithReduxProps, withReduxStore } from '@breadhead/with-redux-store'

class AppWeb extends App<WithReduxProps<State>> {
  public render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <StoreContext.Provider value={reduxStore}>
            <Component {...pageProps} />
          </StoreContext.Provider>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore<State, Api, AppContext>(
  AppWeb as any,
  initializeStore,
)
