import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import Examples, { actions } from '@app/features/examples'
import { AppContext } from '@app/lib/server-types'

interface Props {
  start(): NodeJS.Timer
}

class Index extends React.Component<Props> {

  public static getInitialProps({ reduxStore, req }: AppContext) {
    const isServer = !!req
    reduxStore.dispatch(actions.serverRenderClock(isServer) as any)

    return {}
  }
  private timer?: NodeJS.Timer

  public componentDidMount() {
    this.timer = this.props.start()
  }

  public componentWillUnmount() {
    clearInterval(this.timer!)
  }

  public render() {
    return (
      <Examples />
    )
  }
}

export default connect(
  null,
  (dispatch: Dispatch<AnyAction>) => ({
    start: () => actions.startClock(dispatch) as any,
  }),
)(Index)
