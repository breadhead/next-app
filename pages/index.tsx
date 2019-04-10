import { Component } from 'react'

import { LandingPage } from '@app/features/landing'

export class Index extends Component {
  public static getInitialProps() {
    // prepare data for landing

    return {}
  }

  public render() {
    return <LandingPage />
  }
}
