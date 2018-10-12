import React from 'react'
import { Store as ReduxStore } from 'redux'

import { AppContext } from './server-types'
import { initializeStore, State } from './store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

export type Store = ReduxStore<State>

const getOrCreateStore = (initialState?: State) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!(window as any)[__NEXT_REDUX_STORE__]) {
    (window as any)[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return (window as any)[__NEXT_REDUX_STORE__]
}

export default (App: any) => {
  return class AppWithRedux extends React.Component {

    public static async getInitialProps(appContext: AppContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      }
    }
    private reduxStore: Store

    constructor(props: any) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    public render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
